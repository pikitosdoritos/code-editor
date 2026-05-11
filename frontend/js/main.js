const htmlArea = document.getElementById('html_area');
const cssArea = document.getElementById('css_area');
const jsArea = document.getElementById('js_area');
const outputArea = document.getElementById('output_area');

htmlArea.oninput = cssArea.oninput = jsArea.oninput = updateOutput;

function renderPreview(html) {
    outputArea.srcdoc = html;    
}

function buildPage() {
    let html = '';

    if (htmlArea.value.match(/<\/?(html|head|body)[^>]*>/gmi)?.length != 6) {
        html = `
        <html>
            <head>
                <style>${cssArea.value}</style>
            </head>
            <body>
                ${htmlArea.value}
                <script>${jsArea.value}</script>
            </body>
        </html>
        `;
    } else {
        html = htmlArea.value;
        html = html.replace(/<\/head>/, `<style>${cssArea.value}</style></head>`);
        html = html.replace(/<\/body>/, `<script>${jsArea.value}</script></body>`);
    }

    return html;
}

function updateOutput() {
    renderPreview(buildPage());
}