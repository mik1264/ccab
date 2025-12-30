/**
 * CCAB Seizure Warning System
 * Displays a warning for demos that may contain flashing content
 */

(function() {
    'use strict';

    // Check if this page has potential seizure-triggering content
    const pageContent = document.body ? document.body.innerHTML.toLowerCase() : '';
    const hasFlashingContent =
        pageContent.includes('flash') ||
        pageContent.includes('strobe') ||
        pageContent.includes('blink') ||
        pageContent.includes('flicker') ||
        pageContent.includes('epilep');

    // Only show warning if content detected and not already dismissed
    const dismissed = sessionStorage.getItem('ccab-seizure-warning-dismissed');

    if (hasFlashingContent && !dismissed) {
        showWarning();
    }

    function showWarning() {
        const overlay = document.createElement('div');
        overlay.id = 'seizure-warning-overlay';
        overlay.innerHTML = `
            <div class="seizure-warning-modal">
                <div class="seizure-warning-icon">⚠️</div>
                <h2>Photosensitivity Warning</h2>
                <p>This demo may contain flashing lights or rapid visual changes that could trigger seizures in people with photosensitive epilepsy.</p>
                <p>Please proceed with caution.</p>
                <div class="seizure-warning-buttons">
                    <button id="seizure-proceed" class="btn-proceed">I Understand, Continue</button>
                    <button id="seizure-goback" class="btn-goback">← Go Back</button>
                </div>
                <label class="seizure-remember">
                    <input type="checkbox" id="seizure-remember-checkbox">
                    Don't show this warning again this session
                </label>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #seizure-warning-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 100000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .seizure-warning-modal {
                background: #fff;
                padding: 2rem;
                border-radius: 16px;
                max-width: 500px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            .seizure-warning-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .seizure-warning-modal h2 {
                color: #d32f2f;
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }
            .seizure-warning-modal p {
                color: #333;
                margin: 0.5rem 0;
                line-height: 1.5;
            }
            .seizure-warning-buttons {
                margin-top: 1.5rem;
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            .seizure-warning-buttons button {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                cursor: pointer;
                font-weight: 600;
                transition: transform 0.2s, opacity 0.2s;
            }
            .seizure-warning-buttons button:hover {
                transform: scale(1.05);
            }
            .btn-proceed {
                background: #d32f2f;
                color: white;
            }
            .btn-goback {
                background: #e0e0e0;
                color: #333;
            }
            .seizure-remember {
                display: block;
                margin-top: 1rem;
                font-size: 0.9rem;
                color: #666;
                cursor: pointer;
            }
            .seizure-remember input {
                margin-right: 0.5rem;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(overlay);

        // Event handlers
        document.getElementById('seizure-proceed').onclick = function() {
            if (document.getElementById('seizure-remember-checkbox').checked) {
                sessionStorage.setItem('ccab-seizure-warning-dismissed', 'true');
            }
            overlay.remove();
            style.remove();
        };

        document.getElementById('seizure-goback').onclick = function() {
            history.back();
        };
    }
})();
