import * as monaco from 'monaco-editor';

const htmlContainer = document.getElementById('html-editor');
const cssContainer = document.getElementById('css-editor');
const jsContainer = document.getElementById('js-editor');

export function initEditors(html, css, js) {
    const htmlEditor = monaco.editor.create(htmlContainer, {
        value: html,
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
    });
    
    const cssEditor = monaco.editor.create(cssContainer, {
        value: css,
        language: 'css',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
    });
    
    const jsEditor = monaco.editor.create(jsContainer, {
        value: js,
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
    });
    
    return { htmlEditor, cssEditor, jsEditor };
}
