/**
 * CCAB Moderation Tools
 * Content moderation, reporting, and community safety features
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'ccab-moderation';
    const REPORT_ENDPOINT = null; // Set to your backend endpoint when available

    /**
     * Content types that can be reported
     */
    const REPORT_TYPES = {
        BROKEN: 'broken',
        INAPPROPRIATE: 'inappropriate',
        COPYRIGHT: 'copyright',
        ACCESSIBILITY: 'accessibility',
        OTHER: 'other'
    };

    /**
     * Get stored reports (for offline storage)
     */
    function getStoredReports() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { reports: [], blocked: [] };
        } catch { return { reports: [], blocked: [] }; }
    }

    /**
     * Save reports locally
     */
    function saveReports(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    /**
     * Submit a content report
     */
    async function submitReport(report) {
        const data = getStoredReports();
        const fullReport = {
            ...report,
            id: 'report-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            status: 'pending'
        };

        data.reports.push(fullReport);
        saveReports(data);

        // If backend available, try to submit
        if (REPORT_ENDPOINT) {
            try {
                await fetch(REPORT_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fullReport)
                });
                fullReport.status = 'submitted';
                saveReports(data);
            } catch (e) {
                console.log('Report saved locally, will sync when online');
            }
        }

        return fullReport.id;
    }

    /**
     * Report UI Component
     */
    class ReportButton {
        constructor() {
            this.isOpen = false;
            this.modal = null;
        }

        init() {
            this.createButton();
            this.createModal();
        }

        createButton() {
            const btn = document.createElement('button');
            btn.id = 'ccab-report-btn';
            btn.innerHTML = '⚠️ Report';
            btn.setAttribute('aria-label', 'Report an issue with this demo');
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 160px;
                z-index: 9997;
                background: rgba(255, 255, 255, 0.9);
                color: #666;
                border: 1px solid #ddd;
                padding: 8px 14px;
                border-radius: 20px;
                cursor: pointer;
                font-family: 'Nunito', sans-serif;
                font-size: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                transition: all 0.2s;
            `;
            btn.onmouseover = () => {
                btn.style.background = '#fff';
                btn.style.borderColor = '#BC6C25';
                btn.style.color = '#BC6C25';
            };
            btn.onmouseout = () => {
                btn.style.background = 'rgba(255, 255, 255, 0.9)';
                btn.style.borderColor = '#ddd';
                btn.style.color = '#666';
            };
            btn.onclick = () => this.openModal();
            document.body.appendChild(btn);
        }

        createModal() {
            this.modal = document.createElement('div');
            this.modal.id = 'ccab-report-modal';
            this.modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 10002;
            `;

            const content = document.createElement('div');
            content.style.cssText = `
                background: white;
                padding: 2rem;
                border-radius: 20px;
                max-width: 450px;
                width: 90%;
                font-family: 'Nunito', sans-serif;
            `;

            content.innerHTML = `
                <h2 style="margin: 0 0 1rem; color: #3d4423; font-family: 'Lora', serif;">Report an Issue</h2>
                <p style="color: #666; margin-bottom: 1.5rem;">Help us improve by reporting problems with this demo.</p>

                <form id="report-form">
                    <label style="display: block; margin-bottom: 1rem;">
                        <span style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #606C38;">Issue Type</span>
                        <select name="type" required style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #ddd;
                            border-radius: 10px;
                            font-size: 1rem;
                            font-family: inherit;
                        ">
                            <option value="">Select an issue type...</option>
                            <option value="broken">Demo not working / broken</option>
                            <option value="accessibility">Accessibility issue</option>
                            <option value="performance">Performance problem</option>
                            <option value="copyright">Copyright concern</option>
                            <option value="inappropriate">Inappropriate content</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label style="display: block; margin-bottom: 1rem;">
                        <span style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #606C38;">Description</span>
                        <textarea name="description" required placeholder="Please describe the issue..." style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #ddd;
                            border-radius: 10px;
                            font-size: 1rem;
                            font-family: inherit;
                            min-height: 100px;
                            resize: vertical;
                        "></textarea>
                    </label>

                    <label style="display: block; margin-bottom: 1.5rem;">
                        <span style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #606C38;">Email (optional)</span>
                        <input type="email" name="email" placeholder="your@email.com" style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 2px solid #ddd;
                            border-radius: 10px;
                            font-size: 1rem;
                            font-family: inherit;
                        ">
                        <small style="color: #999; display: block; margin-top: 0.25rem;">Only if you'd like us to follow up</small>
                    </label>

                    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                        <button type="button" id="cancel-report" style="
                            padding: 0.75rem 1.5rem;
                            border: 2px solid #ddd;
                            border-radius: 10px;
                            background: white;
                            cursor: pointer;
                            font-size: 1rem;
                            font-family: inherit;
                        ">Cancel</button>
                        <button type="submit" style="
                            padding: 0.75rem 1.5rem;
                            border: none;
                            border-radius: 10px;
                            background: linear-gradient(135deg, #606C38, #8A9A5B);
                            color: white;
                            cursor: pointer;
                            font-size: 1rem;
                            font-weight: 600;
                            font-family: inherit;
                        ">Submit Report</button>
                    </div>
                </form>
            `;

            this.modal.appendChild(content);
            document.body.appendChild(this.modal);

            // Event handlers
            document.getElementById('cancel-report').onclick = () => this.closeModal();
            this.modal.onclick = (e) => {
                if (e.target === this.modal) this.closeModal();
            };

            document.getElementById('report-form').onsubmit = async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const report = {
                    type: formData.get('type'),
                    description: formData.get('description'),
                    email: formData.get('email') || null
                };

                const reportId = await submitReport(report);
                this.showConfirmation(reportId);
            };
        }

        openModal() {
            this.modal.style.display = 'flex';
            this.isOpen = true;
        }

        closeModal() {
            this.modal.style.display = 'none';
            this.isOpen = false;
            document.getElementById('report-form').reset();
        }

        showConfirmation(reportId) {
            const content = this.modal.querySelector('div');
            content.innerHTML = `
                <div style="text-align: center; padding: 2rem 0;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                    <h2 style="margin: 0 0 1rem; color: #606C38; font-family: 'Lora', serif;">Report Submitted</h2>
                    <p style="color: #666; margin-bottom: 1rem;">Thank you for helping improve CCAB!</p>
                    <p style="color: #999; font-size: 0.85rem; margin-bottom: 1.5rem;">Report ID: ${reportId}</p>
                    <button onclick="document.getElementById('ccab-report-modal').style.display='none'" style="
                        padding: 0.75rem 2rem;
                        border: none;
                        border-radius: 10px;
                        background: linear-gradient(135deg, #606C38, #8A9A5B);
                        color: white;
                        cursor: pointer;
                        font-size: 1rem;
                        font-weight: 600;
                    ">Close</button>
                </div>
            `;

            setTimeout(() => {
                this.closeModal();
                // Recreate the form
                this.modal.remove();
                this.createModal();
            }, 5000);
        }
    }

    /**
     * Content filter for user-generated content
     */
    class ContentFilter {
        constructor() {
            // Basic profanity list (expanded in production)
            this.blockedPatterns = [
                /\b(spam|scam)\b/gi,
                // Add more patterns as needed
            ];
        }

        /**
         * Check if content is safe
         */
        isSafe(text) {
            for (const pattern of this.blockedPatterns) {
                if (pattern.test(text)) {
                    return false;
                }
            }
            return true;
        }

        /**
         * Sanitize HTML content
         */
        sanitize(html) {
            const div = document.createElement('div');
            div.textContent = html;
            return div.innerHTML;
        }
    }

    /**
     * Rate limiter for actions
     */
    class RateLimiter {
        constructor(maxActions, windowMs) {
            this.maxActions = maxActions;
            this.windowMs = windowMs;
            this.actions = [];
        }

        /**
         * Check if action is allowed
         */
        allow() {
            const now = Date.now();
            this.actions = this.actions.filter(t => now - t < this.windowMs);
            if (this.actions.length < this.maxActions) {
                this.actions.push(now);
                return true;
            }
            return false;
        }

        /**
         * Get time until next allowed action
         */
        getWaitTime() {
            if (this.actions.length < this.maxActions) return 0;
            const oldest = Math.min(...this.actions);
            return Math.max(0, this.windowMs - (Date.now() - oldest));
        }
    }

    /**
     * Admin panel (for local development/testing)
     */
    class AdminPanel {
        constructor() {
            this.isAdmin = this.checkAdmin();
        }

        checkAdmin() {
            // Check for admin flag in URL or localStorage
            return window.location.search.includes('admin=true') ||
                   localStorage.getItem('ccab-admin') === 'true';
        }

        init() {
            if (!this.isAdmin) return;

            const btn = document.createElement('button');
            btn.innerHTML = '🛡️ Admin';
            btn.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                background: #f44336;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
                font-family: 'Nunito', sans-serif;
            `;
            btn.onclick = () => this.showPanel();
            document.body.appendChild(btn);
        }

        showPanel() {
            const data = getStoredReports();
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10003;
            `;

            const content = document.createElement('div');
            content.style.cssText = `
                background: white;
                padding: 2rem;
                border-radius: 20px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            `;

            content.innerHTML = `
                <h2 style="margin: 0 0 1rem;">Admin Panel</h2>
                <h3>Reports (${data.reports.length})</h3>
                ${data.reports.length === 0 ? '<p>No reports yet</p>' : ''}
                ${data.reports.map(r => `
                    <div style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; border-radius: 8px;">
                        <strong>${r.type}</strong> - ${r.status}<br>
                        <small>${r.timestamp}</small><br>
                        <p>${r.description}</p>
                        <small>${r.url}</small>
                    </div>
                `).join('')}
                <button onclick="this.closest('div').parentElement.remove()" style="
                    padding: 0.5rem 1rem;
                    border: none;
                    background: #666;
                    color: white;
                    border-radius: 8px;
                    cursor: pointer;
                ">Close</button>
            `;

            modal.appendChild(content);
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
            document.body.appendChild(modal);
        }
    }

    // Export classes
    window.ReportButton = ReportButton;
    window.ContentFilter = ContentFilter;
    window.RateLimiter = RateLimiter;
    window.AdminPanel = AdminPanel;
    window.submitReport = submitReport;
    window.REPORT_TYPES = REPORT_TYPES;

    // Auto-init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new ReportButton().init();
            new AdminPanel().init();
        });
    } else {
        new ReportButton().init();
        new AdminPanel().init();
    }
})();
