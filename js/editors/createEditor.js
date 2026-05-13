import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const htmlContainer = document.getElementById('html_editor');
const cssContainer = document.getElementById('css_editor');
const jsContainer = document.getElementById('js_editor');


export const htmlEditor = monaco.editor.create(htmlContainer, {
    value: '<h1>Hello</h1>',
    language: 'html',
    theme: 'vs-dark',
    automaticLayout: false
});

export const cssEditor = monaco.editor.create(cssContainer, {
    value: 'h1 { color: red; }',
    language: 'css',
    theme: 'vs-dark',
    automaticLayout: false
});

export const jsEditor = monaco.editor.create(jsContainer, {
    value: 'console.log("Hello");',
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: false
});