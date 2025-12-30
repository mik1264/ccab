/**
 * CCAB PWA Install Prompt
 * Shows install button when PWA can be installed
 */

(function() {
    'use strict';

    let deferredPrompt = null;
    let installButton = null;

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        hideInstallButton();
        deferredPrompt = null;
        console.log('CCAB: App installed successfully');
    });

    function showInstallButton() {
        if (installButton) return;

        installButton = document.createElement('button');
        installButton.id = 'pwa-install-btn';
        installButton.innerHTML = '📲 Install App';
        installButton.setAttribute('aria-label', 'Install CCAB as an app');

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #pwa-install-btn {
                position: fixed;
                bottom: 80px;
                right: 20px;
                z-index: 9997;
                background: linear-gradient(135deg, #606C38, #8A9A5B);
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Nunito', -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 600;
                box-shadow: 0 4px 20px rgba(96, 108, 56, 0.4);
                transition: all 0.3s ease;
                animation: pwa-pulse 2s infinite;
            }
            #pwa-install-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 25px rgba(96, 108, 56, 0.5);
            }
            @keyframes pwa-pulse {
                0%, 100% { box-shadow: 0 4px 20px rgba(96, 108, 56, 0.4); }
                50% { box-shadow: 0 4px 30px rgba(96, 108, 56, 0.6); }
            }
            @media (max-width: 768px) {
                #pwa-install-btn {
                    bottom: 140px;
                    right: 10px;
                    padding: 10px 16px;
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(installButton);

        installButton.addEventListener('click', promptInstall);
    }

    function hideInstallButton() {
        if (installButton) {
            installButton.remove();
            installButton = null;
        }
    }

    async function promptInstall() {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('CCAB: User accepted install');
        } else {
            console.log('CCAB: User dismissed install');
        }

        deferredPrompt = null;
        hideInstallButton();
    }
})();
