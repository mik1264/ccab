/**
 * CCAB Code Editor - Monaco-based syntax highlighting and live editing
 * Version: 1.0.0
 *
 * Features:
 * - Syntax highlighting via Monaco Editor
 * - Live code editing with preview
 * - Export modified code
 * - Theme switching (dark/light)
 */

class CodeEditor {
    constructor(options = {}) {
        this.options = {
            container: options.container || '#code-editor',
            targetScript: options.targetScript || null,
            language: options.language || 'javascript',
            theme: options.theme || 'vs-dark',
            readOnly: options.readOnly || false,
            minimap: options.minimap !== false,
            lineNumbers: options.lineNumbers !== false,
            wordWrap: options.wordWrap || 'on',
            fontSize: options.fontSize || 14,
            onSave: options.onSave || null,
            onRun: options.onRun || null
        };

        this.editor = null;
        this.originalCode = '';
        this.container = null;
        this.isMonacoLoaded = false;

        this.init();
    }

    async init() {
        this.container = typeof this.options.container === 'string'
            ? document.querySelector(this.options.container)
            : this.options.container;

        if (!this.container) {
            console.warn('CodeEditor: Container not found');
            return;
        }

        // Create UI structure
        this.createUI();

        // Load Monaco
        await this.loadMonaco();

        // Initialize editor
        if (this.isMonacoLoaded) {
            this.createEditor();
        }
    }

    createUI() {
        this.container.innerHTML = `
            <div class="ccab-code-editor">
                <div class="code-editor-toolbar">
                    <div class="toolbar-left">
                        <button class="code-btn code-btn-run" title="Run Code (Ctrl+Enter)">
                            <span class="btn-icon">▶</span> Run
                        </button>
                        <button class="code-btn code-btn-reset" title="Reset to Original">
                            <span class="btn-icon">↺</span> Reset
                        </button>
                    </div>
                    <div class="toolbar-center">
                        <span class="editor-status"></span>
                    </div>
                    <div class="toolbar-right">
                        <button class="code-btn code-btn-theme" title="Toggle Theme">
                            <span class="btn-icon">◐</span>
                        </button>
                        <button class="code-btn code-btn-copy" title="Copy Code">
                            <span class="btn-icon">📋</span>
                        </button>
                        <button class="code-btn code-btn-download" title="Download Code">
                            <span class="btn-icon">⬇</span>
                        </button>
                        <button class="code-btn code-btn-fullscreen" title="Toggle Fullscreen">
                            <span class="btn-icon">⛶</span>
                        </button>
                    </div>
                </div>
                <div class="code-editor-container">
                    <div class="code-editor-loading">
                        <div class="loading-spinner"></div>
                        <p>Loading Monaco Editor...</p>
                    </div>
                    <div id="monaco-container" style="height: 100%; display: none;"></div>
                </div>
            </div>
        `;

        this.injectStyles();
        this.bindToolbarEvents();
    }

    injectStyles() {
        if (document.getElementById('ccab-code-editor-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'ccab-code-editor-styles';
        styles.textContent = `
            .ccab-code-editor {
                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 300px;
                border: 1px solid var(--moss, #606C38);
                border-radius: 12px;
                overflow: hidden;
                background: #1e1e1e;
                font-family: 'Nunito', sans-serif;
            }

            .code-editor-toolbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 12px;
                background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
                border-bottom: 1px solid #404040;
            }

            .toolbar-left, .toolbar-right {
                display: flex;
                gap: 8px;
            }

            .toolbar-center {
                flex: 1;
                text-align: center;
            }

            .editor-status {
                color: #888;
                font-size: 12px;
            }

            .code-btn {
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 6px 12px;
                border: none;
                border-radius: 6px;
                background: #3c3c3c;
                color: #e0e0e0;
                font-size: 13px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .code-btn:hover {
                background: #4a4a4a;
            }

            .code-btn-run {
                background: var(--sage, #8A9A5B);
                color: white;
            }

            .code-btn-run:hover {
                background: var(--moss, #606C38);
            }

            .btn-icon {
                font-size: 14px;
            }

            .code-editor-container {
                flex: 1;
                position: relative;
                overflow: hidden;
            }

            .code-editor-loading {
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: #1e1e1e;
                color: #888;
            }

            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid #404040;
                border-top-color: var(--sage, #8A9A5B);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 12px;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            .ccab-code-editor.fullscreen {
                position: fixed;
                inset: 0;
                z-index: 10000;
                border-radius: 0;
            }

            /* Light theme overrides */
            .ccab-code-editor.light-theme {
                background: #ffffff;
            }

            .ccab-code-editor.light-theme .code-editor-toolbar {
                background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
                border-bottom-color: #ddd;
            }

            .ccab-code-editor.light-theme .code-btn {
                background: #e8e8e8;
                color: #333;
            }

            .ccab-code-editor.light-theme .code-btn:hover {
                background: #ddd;
            }

            .ccab-code-editor.light-theme .code-editor-loading {
                background: #ffffff;
                color: #666;
            }
        `;
        document.head.appendChild(styles);
    }

    bindToolbarEvents() {
        const wrapper = this.container.querySelector('.ccab-code-editor');

        // Run button
        wrapper.querySelector('.code-btn-run')?.addEventListener('click', () => this.runCode());

        // Reset button
        wrapper.querySelector('.code-btn-reset')?.addEventListener('click', () => this.resetCode());

        // Theme toggle
        wrapper.querySelector('.code-btn-theme')?.addEventListener('click', () => this.toggleTheme());

        // Copy button
        wrapper.querySelector('.code-btn-copy')?.addEventListener('click', () => this.copyCode());

        // Download button
        wrapper.querySelector('.code-btn-download')?.addEventListener('click', () => this.downloadCode());

        // Fullscreen toggle
        wrapper.querySelector('.code-btn-fullscreen')?.addEventListener('click', () => this.toggleFullscreen());
    }

    async loadMonaco() {
        // Check if Monaco is already loaded
        if (window.monaco) {
            this.isMonacoLoaded = true;
            return;
        }

        return new Promise((resolve, reject) => {
            // Load Monaco from CDN
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/monaco-editor@0.44.0/min/vs/loader.js';
            script.onload = () => {
                window.require.config({
                    paths: { vs: 'https://unpkg.com/monaco-editor@0.44.0/min/vs' }
                });

                window.require(['vs/editor/editor.main'], () => {
                    this.isMonacoLoaded = true;
                    resolve();
                });
            };
            script.onerror = () => {
                this.showFallbackEditor();
                reject(new Error('Failed to load Monaco Editor'));
            };
            document.head.appendChild(script);
        });
    }

    createEditor() {
        const container = this.container.querySelector('#monaco-container');
        const loading = this.container.querySelector('.code-editor-loading');

        if (loading) loading.style.display = 'none';
        if (container) container.style.display = 'block';

        // Get source code from target script or provided code
        this.originalCode = this.getSourceCode();

        this.editor = monaco.editor.create(container, {
            value: this.originalCode,
            language: this.options.language,
            theme: this.options.theme,
            readOnly: this.options.readOnly,
            minimap: { enabled: this.options.minimap },
            lineNumbers: this.options.lineNumbers ? 'on' : 'off',
            wordWrap: this.options.wordWrap,
            fontSize: this.options.fontSize,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            renderWhitespace: 'selection',
            tabSize: 4,
            insertSpaces: true,
            formatOnPaste: true
        });

        // Keyboard shortcuts
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            this.runCode();
        });

        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            this.saveCode();
        });

        // Track changes
        this.editor.onDidChangeModelContent(() => {
            this.updateStatus();
        });

        this.updateStatus();
    }

    getSourceCode() {
        if (this.options.targetScript) {
            const script = document.querySelector(this.options.targetScript);
            if (script) {
                return script.textContent.trim();
            }
        }

        // Try to extract main demo script
        const scripts = document.querySelectorAll('script:not([src])');
        for (const script of scripts) {
            const content = script.textContent.trim();
            if (content.length > 100 && !content.includes('monaco') && !content.includes('CodeEditor')) {
                return content;
            }
        }

        return '// No source code found\n// Add code here...';
    }

    showFallbackEditor() {
        const container = this.container.querySelector('.code-editor-container');
        container.innerHTML = `
            <div style="padding: 20px; color: #888;">
                <p>⚠️ Monaco Editor could not be loaded.</p>
                <p>Using simple textarea as fallback:</p>
                <textarea id="fallback-editor" style="
                    width: 100%;
                    height: calc(100% - 80px);
                    background: #1e1e1e;
                    color: #d4d4d4;
                    border: 1px solid #404040;
                    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                    font-size: 14px;
                    padding: 12px;
                    resize: none;
                ">${this.getSourceCode()}</textarea>
            </div>
        `;
    }

    updateStatus() {
        const status = this.container.querySelector('.editor-status');
        if (!status || !this.editor) return;

        const currentCode = this.editor.getValue();
        const hasChanges = currentCode !== this.originalCode;

        status.textContent = hasChanges ? '● Modified' : '○ No changes';
        status.style.color = hasChanges ? '#f0ad4e' : '#888';
    }

    runCode() {
        if (!this.editor) return;

        const code = this.editor.getValue();

        if (this.options.onRun) {
            this.options.onRun(code);
            return;
        }

        // Default: Try to execute in sandbox
        try {
            // Create isolated execution context
            const sandbox = document.createElement('iframe');
            sandbox.style.display = 'none';
            document.body.appendChild(sandbox);

            sandbox.contentWindow.eval(code);

            this.showNotification('Code executed successfully!', 'success');

            setTimeout(() => sandbox.remove(), 1000);
        } catch (error) {
            this.showNotification(`Error: ${error.message}`, 'error');
        }
    }

    resetCode() {
        if (!this.editor) return;

        if (confirm('Reset to original code? Your changes will be lost.')) {
            this.editor.setValue(this.originalCode);
            this.showNotification('Code reset to original', 'info');
        }
    }

    saveCode() {
        if (!this.editor) return;

        const code = this.editor.getValue();

        if (this.options.onSave) {
            this.options.onSave(code);
        }

        // Update original to prevent "unsaved" status
        this.originalCode = code;
        this.updateStatus();

        this.showNotification('Changes saved!', 'success');
    }

    toggleTheme() {
        const wrapper = this.container.querySelector('.ccab-code-editor');
        const isLight = wrapper.classList.toggle('light-theme');

        if (this.editor) {
            monaco.editor.setTheme(isLight ? 'vs' : 'vs-dark');
        }
    }

    copyCode() {
        const code = this.editor ? this.editor.getValue() : '';

        navigator.clipboard.writeText(code).then(() => {
            this.showNotification('Code copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy code', 'error');
        });
    }

    downloadCode() {
        const code = this.editor ? this.editor.getValue() : '';
        const blob = new Blob([code], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'demo-code.js';
        a.click();

        URL.revokeObjectURL(url);
        this.showNotification('Code downloaded!', 'success');
    }

    toggleFullscreen() {
        const wrapper = this.container.querySelector('.ccab-code-editor');
        wrapper.classList.toggle('fullscreen');

        if (this.editor) {
            setTimeout(() => this.editor.layout(), 100);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            z-index: 10001;
            animation: fadeIn 0.3s ease;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    getValue() {
        return this.editor ? this.editor.getValue() : '';
    }

    setValue(code) {
        if (this.editor) {
            this.editor.setValue(code);
        }
    }

    destroy() {
        if (this.editor) {
            this.editor.dispose();
        }
    }
}

/**
 * Quick viewer for showing source code in a modal
 */
class CodeViewer {
    static show(options = {}) {
        const overlay = document.createElement('div');
        overlay.className = 'code-viewer-overlay';
        overlay.innerHTML = `
            <div class="code-viewer-modal">
                <div class="code-viewer-header">
                    <h3>${options.title || 'Source Code'}</h3>
                    <button class="code-viewer-close">&times;</button>
                </div>
                <div class="code-viewer-body" id="code-viewer-editor"></div>
            </div>
        `;

        const styles = document.createElement('style');
        styles.textContent = `
            .code-viewer-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.8);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .code-viewer-modal {
                width: 90%;
                max-width: 1000px;
                height: 80vh;
                background: #1e1e1e;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            .code-viewer-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                background: #2d2d2d;
                border-bottom: 1px solid #404040;
            }
            .code-viewer-header h3 {
                margin: 0;
                color: #e0e0e0;
                font-size: 16px;
            }
            .code-viewer-close {
                background: none;
                border: none;
                color: #888;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            .code-viewer-close:hover {
                color: #fff;
            }
            .code-viewer-body {
                flex: 1;
                overflow: hidden;
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(overlay);

        // Initialize editor in modal
        new CodeEditor({
            container: '#code-viewer-editor',
            language: options.language || 'javascript',
            readOnly: options.readOnly !== false
        });

        // Close handlers
        overlay.querySelector('.code-viewer-close').onclick = () => {
            overlay.remove();
            styles.remove();
        };

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.remove();
                styles.remove();
            }
        };

        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                overlay.remove();
                styles.remove();
                document.removeEventListener('keydown', handler);
            }
        });
    }
}

/**
 * Add "View Source" button to demos
 */
function addViewSourceButton(options = {}) {
    const btn = document.createElement('button');
    btn.className = 'view-source-btn';
    btn.innerHTML = '<span>{ }</span> View Source';
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 10px 16px;
        background: rgba(96, 108, 56, 0.9);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 1000;
        transition: all 0.2s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    btn.onmouseenter = () => btn.style.background = 'rgba(138, 154, 91, 0.95)';
    btn.onmouseleave = () => btn.style.background = 'rgba(96, 108, 56, 0.9)';

    btn.onclick = () => CodeViewer.show({
        title: document.title || 'Demo Source Code',
        language: 'javascript',
        readOnly: false
    });

    document.body.appendChild(btn);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CodeEditor, CodeViewer, addViewSourceButton };
}
