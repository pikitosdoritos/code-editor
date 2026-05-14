# Code Editor 📝

A lightweight, browser-based online code editor built with Vanilla JavaScript and the powerful Monaco Editor (the same engine that powers VS Code). It provides an environment to write HTML, CSS, and JavaScript with live preview capabilities.

## ✨ Features

- **Multi-Pane Editing**: Three distinct editor panes for HTML, CSS, and JavaScript.
- **Powered by Monaco**: Experience rich code editing with syntax highlighting, auto-completion, and standard IDE features thanks to `monaco-editor`.
- **Live Preview Environment**: Quickly render and execute your HTML, CSS, and JS code inside an isolated `iframe`. 
- **Smart HTML Wrapping**: The preview intelligently injects your CSS into `<style>` tags and your JS into `<script>` tags. If you provide a raw HTML snippet without `<html>` or `<body>` tags, the builder will automatically wrap it for you.
- **Local Storage Persistence**: Your code is automatically saved to your browser's Local Storage when you hit save, ensuring you don't lose your progress upon page refresh.
- **Keyboard Shortcuts**: 
  - `Ctrl + S`: Save your current code to Local Storage.
  - `Ctrl + Enter`: Trigger the live preview build.

## 🛠️ Technology Stack

- **HTML5 & CSS3**: For the layout and styling of the editor panes.
- **Vanilla JavaScript (ES Modules)**: Core logic for handling editors, capturing input, and building the preview.
- **Monaco Editor**: Provides the high-performance code editing instances.
- **Vite**: Used as the frontend tooling and development server to manage module bundling efficiently.

## 📂 Project Structure

- `index.html`: The main entry point containing the editor layout and toolbars.
- `package.json`: Project configuration and dependencies (Vite, Monaco).
- `js/main.js`: Core logic for managing editor inputs, keyboard shortcuts, local storage, and the preview generation.
- `js/editors/createEditor.js`: Handles the initialization and configuration of the Monaco editor instances for HTML, CSS, and JS.
- `css/`: Contains the stylesheets (`style.css`, `editor.css`, `preview.css`) for the UI layout.

## 🚀 Getting Started

To run this project locally, you need [Node.js](https://nodejs.org/) installed on your machine.

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start Vite's local server. Open the provided `localhost` URL in your browser to start coding.
3. **Build for production:**
   ```bash
   npm run build
   ```
   Vite will bundle the application and output the optimized files into the `dist` folder.

## ⌨️ Usage

1. Open the editor in your browser.
2. Start typing your HTML, CSS, and JavaScript in their respective panes.
3. Press `Ctrl + Enter` (or click the **Preview** button) to see the live output in the preview area.
4. Press `Ctrl + S` (or click the **Save** button) to store your current snippet in your browser's local storage.
