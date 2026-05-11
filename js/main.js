import{ htmlEditor, cssEditor, jsEditor} from './editors/createEditor.js';

const outputArea = document.getElementById('output_area');

htmlEditor.onDidChangeModelContent(updateOutput);
cssEditor.onDidChangeModelContent(updateOutput);
jsEditor.onDidChangeModelContent(updateOutput);

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