const htmlArea = document.getElementById('html_area');
const cssArea = document.getElementById('css_area');
const jsArea = document.getElementById('js_area');
const outputArea = document.getElementById('output_area');

htmlArea.oninput = updateOutput;

function updateOutput() {
    outputArea.srcdoc = htmlArea.value;
}
