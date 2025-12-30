/**
 * CCAB Moderation Tools
 * Content moderation and community management utilities
 * Version: 1.0.0
 *
 * Features:
 * - Content reporting system
 * - User-generated content filtering
 * - Community guidelines enforcement
 * - Admin dashboard utilities
 */

class ModerationTools {
    constructor(options = {}) {
        this.options = {
            storageKey: options.storageKey || 'ccab-moderation',
            reportEndpoint: options.reportEndpoint || null,
            maxReportsBeforeHide: options.maxReportsBeforeHide || 3,
            enableLocalStorage: options.enableLocalStorage !== false
        };

        this.reports = this.loadReports();
        this.blockedContent = new Set();
    }

    /**
     * Report content
     */
    reportContent(contentId, reason, details = {}) {
        const report = {
            id: `report-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            contentId,
            reason,
            details,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        this.reports.push(report);
        this.saveReports();

        // Check if content should be auto-hidden
        const reportCount = this.reports.filter(r =>
            r.contentId === contentId && r.status === 'pending'
        ).length;

        if (reportCount >= this.options.maxReportsBeforeHide) {
            this.blockedContent.add(contentId);
        }

        // Send to endpoint if configured
        if (this.options.reportEndpoint) {
            this.sendReport(report);
        }

        return report;
    }

    async sendReport(report) {
        try {
            await fetch(this.options.reportEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(report)
            });
        } catch (e) {
            console.warn('Failed to send report:', e);
        }
    }

    /**
     * Check if content is blocked
     */
    isBlocked(contentId) {
        return this.blockedContent.has(contentId);
    }

    /**
     * Get report reasons
     */
    static getReportReasons() {
        return [
            { id: 'inappropriate', label: 'Inappropriate content' },
            { id: 'spam', label: 'Spam or advertising' },
            { id: 'copyright', label: 'Copyright violation' },
            { id: 'harmful', label: 'Harmful or dangerous' },
            { id: 'broken', label: 'Broken or not working' },
            { id: 'other', label: 'Other issue' }
        ];
    }

    loadReports() {
        if (!this.options.enableLocalStorage) return [];
        try {
            return JSON.parse(localStorage.getItem(this.options.storageKey)) || [];
        } catch (e) {
            return [];
        }
    }

    saveReports() {
        if (!this.options.enableLocalStorage) return;
        try {
            localStorage.setItem(this.options.storageKey, JSON.stringify(this.reports));
        } catch (e) {}
    }
}

/**
 * Report Button Component
 */
class ReportButton {
    constructor(contentId, options = {}) {
        this.contentId = contentId;
        this.options = {
            position: options.position || 'bottom-right',
            moderationTools: options.moderationTools || new ModerationTools()
        };

        this.element = null;
        this.modal = null;

        this.create();
    }

    create() {
        this.element = document.createElement('button');
        this.element.className = 'report-button';
        this.element.innerHTML = '⚑ Report';
        this.element.setAttribute('aria-label', 'Report this content');

        const positions = {
            'bottom-right': 'bottom: 20px; right: 80px;',
            'bottom-left': 'bottom: 20px; left: 80px;',
            'top-right': 'top: 80px; right: 20px;',
            'top-left': 'top: 80px; left: 20px;'
        };

        this.element.style.cssText = `
            position: fixed;
            ${positions[this.options.position]}
            padding: 8px 16px;
            background: rgba(60, 60, 60, 0.8);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
            z-index: 999;
            transition: all 0.2s ease;
        `;

        this.element.addEventListener('mouseenter', () => {
            this.element.style.color = '#fff';
            this.element.style.borderColor = '#888';
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.color = '#aaa';
            this.element.style.borderColor = '#555';
        });

        this.element.addEventListener('click', () => this.showModal());

        document.body.appendChild(this.element);
    }

    showModal() {
        if (this.modal) return;

        const reasons = ModerationTools.getReportReasons();

        this.modal = document.createElement('div');
        this.modal.className = 'report-modal-overlay';
        this.modal.innerHTML = `
            <div class="report-modal">
                <div class="report-header">
                    <h3>Report Content</h3>
                    <button class="report-close">&times;</button>
                </div>
                <div class="report-body">
                    <p>Why are you reporting this content?</p>
                    <div class="report-reasons">
                        ${reasons.map(r => `
                            <label class="report-reason">
                                <input type="radio" name="reason" value="${r.id}">
                                <span>${r.label}</span>
                            </label>
                        `).join('')}
                    </div>
                    <textarea class="report-details" placeholder="Additional details (optional)"></textarea>
                </div>
                <div class="report-footer">
                    <button class="report-cancel">Cancel</button>
                    <button class="report-submit">Submit Report</button>
                </div>
            </div>
        `;

        this.injectModalStyles();

        this.modal.querySelector('.report-close').addEventListener('click', () => this.hideModal());
        this.modal.querySelector('.report-cancel').addEventListener('click', () => this.hideModal());
        this.modal.querySelector('.report-submit').addEventListener('click', () => this.submitReport());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });

        document.body.appendChild(this.modal);
    }

    injectModalStyles() {
        if (document.getElementById('report-modal-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'report-modal-styles';
        styles.textContent = `
            .report-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }

            .report-modal {
                width: 90%;
                max-width: 400px;
                background: #2d2d2d;
                border-radius: 12px;
                overflow: hidden;
                color: #e0e0e0;
                font-family: 'Nunito', sans-serif;
            }

            .report-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                background: #252525;
                border-bottom: 1px solid #404040;
            }

            .report-header h3 {
                margin: 0;
                font-size: 16px;
            }

            .report-close {
                background: none;
                border: none;
                color: #888;
                font-size: 24px;
                cursor: pointer;
                line-height: 1;
            }

            .report-close:hover { color: #fff; }

            .report-body {
                padding: 20px;
            }

            .report-body p {
                margin: 0 0 15px 0;
                color: #aaa;
            }

            .report-reasons {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 15px;
            }

            .report-reason {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                background: #353535;
                border-radius: 6px;
                cursor: pointer;
                transition: background 0.2s ease;
            }

            .report-reason:hover {
                background: #404040;
            }

            .report-reason input[type="radio"] {
                accent-color: var(--sage, #8A9A5B);
            }

            .report-details {
                width: 100%;
                height: 80px;
                padding: 10px;
                background: #353535;
                border: 1px solid #404040;
                border-radius: 6px;
                color: #e0e0e0;
                font-family: inherit;
                resize: vertical;
            }

            .report-footer {
                display: flex;
                gap: 10px;
                padding: 15px 20px;
                background: #252525;
                border-top: 1px solid #404040;
            }

            .report-footer button {
                flex: 1;
                padding: 10px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s ease;
            }

            .report-cancel {
                background: #404040;
                color: #e0e0e0;
            }

            .report-submit {
                background: var(--sage, #8A9A5B);
                color: white;
            }

            .report-footer button:hover {
                filter: brightness(1.1);
            }
        `;
        document.head.appendChild(styles);
    }

    hideModal() {
        if (this.modal) {
            this.modal.remove();
            this.modal = null;
        }
    }

    submitReport() {
        const reason = this.modal.querySelector('input[name="reason"]:checked');
        const details = this.modal.querySelector('.report-details').value;

        if (!reason) {
            alert('Please select a reason for your report.');
            return;
        }

        const report = this.options.moderationTools.reportContent(
            this.contentId,
            reason.value,
            { details }
        );

        this.hideModal();
        this.showConfirmation();
    }

    showConfirmation() {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            background: #4caf50;
            color: white;
            border-radius: 8px;
            font-size: 14px;
            z-index: 10001;
        `;
        toast.textContent = 'Thank you for your report. We will review it shortly.';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    }

    destroy() {
        if (this.element) this.element.remove();
        if (this.modal) this.modal.remove();
    }
}

/**
 * Content Guidelines Display
 */
function showCommunityGuidelines() {
    const guidelines = `
        <h2>Community Guidelines</h2>

        <h3>Be Respectful</h3>
        <p>Treat others with kindness and respect. Harassment, hate speech, and personal attacks are not tolerated.</p>

        <h3>Share Responsibly</h3>
        <p>Only share content you have the right to share. Respect copyright and intellectual property.</p>

        <h3>Keep It Safe</h3>
        <p>Don't share content that could harm others. This includes malicious code, dangerous instructions, or disturbing imagery.</p>

        <h3>Stay On Topic</h3>
        <p>Keep discussions relevant to visualization, coding, and creative exploration.</p>

        <h3>Report Issues</h3>
        <p>If you see content that violates these guidelines, please report it using the Report button.</p>
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
    `;
    modal.innerHTML = `
        <div style="
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            background: #2d2d2d;
            color: #e0e0e0;
            padding: 30px;
            border-radius: 12px;
            font-family: 'Nunito', sans-serif;
        ">
            ${guidelines}
            <button style="
                margin-top: 20px;
                padding: 10px 20px;
                background: var(--sage, #8A9A5B);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
            ">Close</button>
        </div>
    `;

    modal.querySelector('button').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    document.body.appendChild(modal);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ModerationTools, ReportButton, showCommunityGuidelines };
}
