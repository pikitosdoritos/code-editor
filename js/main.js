const htmlArea = document.getElementById('html_area');
const cssArea = document.getElementById('css_area');
const jsArea = document.getElementById('js_area');
const outputArea = document.getElementById('output_area');

htmlArea.addEventListener('input', updateOutput);
cssArea.addEventListener('input', updateOutput);
jsArea.addEventListener('input', updateOutput);

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
    renderPreview(buildPage(htmlArea.value, cssArea.value, jsArea.value));
}