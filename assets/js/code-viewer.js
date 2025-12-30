/**
 * CCAB Code Viewer with Monaco Editor
 * Provides syntax highlighting and optional live editing
 */

(function() {
    'use strict';

    // Monaco CDN paths
    const MONACO_CDN = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min';
    const MONACO_LOADER = `${MONACO_CDN}/vs/loader.js`;

    let monacoLoaded = false;
    let monacoLoadPromise = null;

    /**
     * Load Monaco editor from CDN
     */
    async function loadMonaco() {
        if (monacoLoaded) return window.monaco;
        if (monacoLoadPromise) return monacoLoadPromise;

        monacoLoadPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = MONACO_LOADER;
            script.onload = () => {
                require.config({ paths: { vs: `${MONACO_CDN}/vs` } });
                require(['vs/editor/editor.main'], () => {
                    monacoLoaded = true;
                    resolve(window.monaco);
                });
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });

        return monacoLoadPromise;
    }

    /**
     * CodeViewer class for displaying source code
     */
    class CodeViewer {
        constructor(options = {}) {
            this.container = options.container || null;
            this.code = options.code || '';
            this.language = options.language || 'javascript';
            this.theme = options.theme || 'vs-dark';
            this.readOnly = options.readOnly !== false;
            this.lineNumbers = options.lineNumbers !== false;
            this.minimap = options.minimap || false;
            this.editor = null;
            this.visible = false;
        }

        async init() {
            if (!this.container) {
                this.container = this.createContainer();
            }

            await loadMonaco();

            this.editor = monaco.editor.create(this.container, {
                value: this.code,
                language: this.language,
                theme: this.theme,
                readOnly: this.readOnly,
                lineNumbers: this.lineNumbers ? 'on' : 'off',
                minimap: { enabled: this.minimap },
                automaticLayout: true,
                scrollBeyondLastLine: false,
                fontSize: 14,
                fontFamily: "'Fira Code', 'Consolas', monospace",
                wordWrap: 'on'
            });

            return this;
        }

        createContainer() {
            const div = document.createElement('div');
            div.className = 'ccab-code-viewer';
            div.style.cssText = `
                position: fixed;
                top: 60px;
                right: 20px;
                width: 500px;
                height: 400px;
                z-index: 9990;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                display: none;
            `;
            document.body.appendChild(div);
            return div;
        }

        show() {
            this.container.style.display = 'block';
            this.visible = true;
            if (this.editor) this.editor.layout();
        }

        hide() {
            this.container.style.display = 'none';
            this.visible = false;
        }

        toggle() {
            this.visible ? this.hide() : this.show();
        }

        setCode(code, language) {
            this.code = code;
            if (language) this.language = language;
            if (this.editor) {
                this.editor.setValue(code);
                monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
            }
        }

        getCode() {
            return this.editor ? this.editor.getValue() : this.code;
        }

        destroy() {
            if (this.editor) {
                this.editor.dispose();
            }
            if (this.container && this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        }
    }

    /**
     * Source code viewer for the current page
     */
    class PageSourceViewer {
        constructor() {
            this.viewer = null;
            this.button = null;
            this.initialized = false;
        }

        async init() {
            if (this.initialized) return;
            this.initialized = true;

            // Create toggle button
            this.button = document.createElement('button');
            this.button.className = 'ccab-source-btn';
            this.button.innerHTML = '&lt;/&gt; Source';
            this.button.setAttribute('aria-label', 'View page source code');
            this.button.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 9999;
                background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
                color: #d4d4d4;
                border: none;
                padding: 10px 16px;
                border-radius: 20px;
                cursor: pointer;
                font-family: 'Consolas', monospace;
                font-size: 13px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                transition: all 0.2s;
            `;
            this.button.onmouseover = () => {
                this.button.style.transform = 'scale(1.05)';
                this.button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
            };
            this.button.onmouseout = () => {
                this.button.style.transform = 'scale(1)';
                this.button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            };
            this.button.onclick = () => this.toggle();
            document.body.appendChild(this.button);

            // Create close button for viewer
            this.closeBtn = document.createElement('button');
            this.closeBtn.innerHTML = '&times;';
            this.closeBtn.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                z-index: 10;
                background: rgba(255, 255, 255, 0.1);
                color: #d4d4d4;
                border: none;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                line-height: 1;
            `;
            this.closeBtn.onclick = () => this.hide();
        }

        async toggle() {
            if (!this.viewer) {
                // Create viewer on first use
                const container = document.createElement('div');
                container.style.cssText = `
                    position: fixed;
                    top: 60px;
                    right: 20px;
                    width: min(600px, calc(100vw - 40px));
                    height: min(500px, calc(100vh - 100px));
                    z-index: 9990;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                    display: none;
                `;
                document.body.appendChild(container);

                // Get page source
                const source = document.documentElement.outerHTML;

                this.viewer = new CodeViewer({
                    container: container,
                    code: source,
                    language: 'html',
                    readOnly: true
                });

                await this.viewer.init();
                container.appendChild(this.closeBtn);
            }

            this.viewer.toggle();
            this.button.innerHTML = this.viewer.visible ? '&times; Close' : '&lt;/&gt; Source';
        }

        hide() {
            if (this.viewer) {
                this.viewer.hide();
                this.button.innerHTML = '&lt;/&gt; Source';
            }
        }

        show() {
            if (this.viewer) {
                this.viewer.show();
                this.button.innerHTML = '&times; Close';
            }
        }
    }

    // Auto-initialize on demo pages (not on index)
    if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
        document.addEventListener('DOMContentLoaded', () => {
            // Only init on demo pages, not gallery indexes
            const isGalleryIndex = document.querySelector('.galleries-grid, .demos-grid');
            if (!isGalleryIndex) {
                const sourceViewer = new PageSourceViewer();
                sourceViewer.init();
                window.ccabSourceViewer = sourceViewer;
            }
        });
    }

    // Export classes
    window.CodeViewer = CodeViewer;
    window.PageSourceViewer = PageSourceViewer;
    window.loadMonaco = loadMonaco;
})();
