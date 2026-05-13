import{ initEditors } from './editors/createEditor.js';

const html = localStorage.getItem('html') || '<h1>Hello</h1>';
const css = localStorage.getItem('css') || 'h1 { color: red; }';
const js = localStorage.getItem('js') || 'console.log("Hello");';

const { htmlEditor, cssEditor, jsEditor } = initEditors(html, css, js);

const outputArea = document.getElementById('output-area');
const previewButton = document.getElementsByClassName('preview-button')[0];

previewButton.onclick = updateOutput;

window.onkeydown = saveCode;

function saveCode(e) {
    if (e.ctrlKey && e.key === 's') {
        localStorage.setItem('html', htmlEditor.getValue());
        localStorage.setItem('css', cssEditor.getValue());
        localStorage.setItem('js', jsEditor.getValue());
    }
}

function renderPreview(html) {
    outputArea.srcdoc = html;    
}

function buildPage(html, css, js) {
    let markup = '';

    if (html.match(/<\/?(html|head|body)[^>]*>/gmi)?.length != 6) {
        markup = `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
        `;
    } else {
        markup = html;
        markup = markup.replace(/<\/head>/, `<style>${css}</style></head>`);
        markup = markup.replace(/<\/body>/, `<script>${js}</script></body>`);
    }

    return markup;
}

function updateOutput() {
    renderPreview(buildPage(htmlEditor.getValue(), cssEditor.getValue(), jsEditor.getValue()));
}