/**
 * CCAB Privacy-First Analytics
 * Lightweight, privacy-respecting analytics
 * Version: 1.0.0
 *
 * Features:
 * - No cookies or persistent identifiers
 * - Session-based tracking only
 * - Local storage for demo ratings
 * - Plausible Analytics integration option
 * - Learning outcome measurement
 */

class PrivacyAnalytics {
    constructor(options = {}) {
        this.options = {
            enabled: options.enabled !== false,
            storageKey: options.storageKey || 'ccab-analytics',
            plausibleDomain: options.plausibleDomain || null,
            trackPageViews: options.trackPageViews !== false,
            trackInteractions: options.trackInteractions !== false,
            trackTime: options.trackTime !== false
        };

        this.sessionId = this.generateSessionId();
        this.sessionStart = Date.now();
        this.pageStartTime = Date.now();
        this.interactions = 0;
        this.events = [];

        if (this.options.enabled) {
            this.init();
        }
    }

    init() {
        // Track page view
        if (this.options.trackPageViews) {
            this.trackPageView();
        }

        // Track time on page
        if (this.options.trackTime) {
            this.setupTimeTracking();
        }

        // Track interactions
        if (this.options.trackInteractions) {
            this.setupInteractionTracking();
        }

        // Initialize Plausible if configured
        if (this.options.plausibleDomain) {
            this.initPlausible();
        }
    }

    generateSessionId() {
        // Session ID that expires with the browser tab
        return `sess-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    // ==================
    // Page View Tracking
    // ==================

    trackPageView() {
        const pageData = {
            path: window.location.pathname,
            title: document.title,
            referrer: document.referrer || 'direct',
            timestamp: new Date().toISOString()
        };

        this.logEvent('pageview', pageData);

        // Send to Plausible if configured
        if (window.plausible) {
            window.plausible('pageview');
        }
    }

    // ==================
    // Time Tracking
    // ==================

    setupTimeTracking() {
        // Track visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseTimeTracking();
            } else {
                this.resumeTimeTracking();
            }
        });

        // Track before unload
        window.addEventListener('beforeunload', () => {
            this.trackTimeSpent();
        });

        // Periodic time tracking
        setInterval(() => {
            this.trackTimeSpent();
        }, 60000); // Every minute
    }

    pauseTimeTracking() {
        this.pausedAt = Date.now();
    }

    resumeTimeTracking() {
        if (this.pausedAt) {
            const pauseDuration = Date.now() - this.pausedAt;
            this.pageStartTime += pauseDuration;
            this.pausedAt = null;
        }
    }

    trackTimeSpent() {
        const timeSpent = Math.round((Date.now() - this.pageStartTime) / 1000);

        this.logEvent('time_spent', {
            seconds: timeSpent,
            page: window.location.pathname
        });

        // Send to Plausible as custom event
        if (window.plausible && timeSpent > 10) {
            window.plausible('Time Spent', {
                props: {
                    seconds: Math.min(timeSpent, 3600), // Cap at 1 hour
                    page: window.location.pathname
                }
            });
        }
    }

    getTimeSpent() {
        return Math.round((Date.now() - this.pageStartTime) / 1000);
    }

    // ==================
    // Interaction Tracking
    // ==================

    setupInteractionTracking() {
        // Track clicks on interactive elements
        document.addEventListener('click', (e) => {
            const target = e.target.closest('button, a, [role="button"], input[type="submit"]');
            if (target) {
                this.trackInteraction('click', {
                    element: target.tagName.toLowerCase(),
                    text: target.textContent?.slice(0, 50),
                    class: target.className?.slice(0, 50)
                });
            }
        });

        // Track canvas interactions
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'CANVAS') {
                this.trackInteraction('canvas_click', {
                    x: e.offsetX,
                    y: e.offsetY
                });
            }
        });

        // Track parameter changes
        document.addEventListener('input', (e) => {
            if (e.target.matches('input[type="range"], input[type="number"]')) {
                this.trackInteraction('param_change', {
                    name: e.target.name || e.target.id,
                    value: e.target.value
                });
            }
        });
    }

    trackInteraction(type, details = {}) {
        this.interactions++;

        this.logEvent('interaction', {
            type,
            ...details
        });
    }

    getInteractionCount() {
        return this.interactions;
    }

    // ==================
    // Custom Events
    // ==================

    trackEvent(name, props = {}) {
        this.logEvent(name, props);

        // Send to Plausible
        if (window.plausible) {
            window.plausible(name, { props });
        }
    }

    // ==================
    // Demo Ratings
    // ==================

    rateDemo(demoId, rating, feedback = '') {
        const ratingData = {
            demoId,
            rating: Math.max(1, Math.min(5, rating)),
            feedback: feedback.slice(0, 500),
            timestamp: new Date().toISOString()
        };

        // Store locally
        this.saveRating(ratingData);

        // Log event
        this.logEvent('demo_rating', ratingData);

        // Send to Plausible
        if (window.plausible) {
            window.plausible('Demo Rating', {
                props: {
                    demo: demoId,
                    rating: ratingData.rating
                }
            });
        }

        return ratingData;
    }

    saveRating(ratingData) {
        try {
            const ratings = JSON.parse(localStorage.getItem(`${this.options.storageKey}-ratings`)) || {};
            ratings[ratingData.demoId] = ratingData;
            localStorage.setItem(`${this.options.storageKey}-ratings`, JSON.stringify(ratings));
        } catch (e) {}
    }

    getRating(demoId) {
        try {
            const ratings = JSON.parse(localStorage.getItem(`${this.options.storageKey}-ratings`)) || {};
            return ratings[demoId]?.rating || null;
        } catch (e) {
            return null;
        }
    }

    // ==================
    // Learning Outcomes
    // ==================

    trackLearningProgress(demoId, metrics) {
        const progressData = {
            demoId,
            ...metrics,
            timestamp: new Date().toISOString()
        };

        this.logEvent('learning_progress', progressData);
        this.saveLearningProgress(progressData);

        // Send to Plausible
        if (window.plausible && metrics.completed) {
            window.plausible('Learning Complete', {
                props: {
                    demo: demoId,
                    timeSpent: metrics.timeSpent || 0,
                    challengesCompleted: metrics.challengesCompleted || 0
                }
            });
        }
    }

    saveLearningProgress(progressData) {
        try {
            const progress = JSON.parse(localStorage.getItem(`${this.options.storageKey}-learning`)) || {};
            progress[progressData.demoId] = progressData;
            localStorage.setItem(`${this.options.storageKey}-learning`, JSON.stringify(progress));
        } catch (e) {}
    }

    getLearningProgress(demoId = null) {
        try {
            const progress = JSON.parse(localStorage.getItem(`${this.options.storageKey}-learning`)) || {};
            return demoId ? progress[demoId] : progress;
        } catch (e) {
            return demoId ? null : {};
        }
    }

    // ==================
    // Plausible Integration
    // ==================

    initPlausible() {
        const script = document.createElement('script');
        script.defer = true;
        script.dataset.domain = this.options.plausibleDomain;
        script.src = 'https://plausible.io/js/script.js';
        document.head.appendChild(script);

        // Define plausible function before script loads
        window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments);
        };
    }

    // ==================
    // Event Logging
    // ==================

    logEvent(type, data) {
        const event = {
            type,
            data,
            timestamp: Date.now(),
            session: this.sessionId
        };

        this.events.push(event);

        // Keep only last 100 events in memory
        if (this.events.length > 100) {
            this.events = this.events.slice(-100);
        }
    }

    getEvents() {
        return [...this.events];
    }

    // ==================
    // Summary
    // ==================

    getSummary() {
        return {
            sessionId: this.sessionId,
            sessionDuration: Math.round((Date.now() - this.sessionStart) / 1000),
            pageTime: this.getTimeSpent(),
            interactions: this.interactions,
            eventCount: this.events.length,
            page: window.location.pathname
        };
    }
}

/**
 * Rating Widget Component
 */
class RatingWidget {
    constructor(demoId, options = {}) {
        this.demoId = demoId;
        this.options = {
            position: options.position || 'bottom-left',
            analytics: options.analytics || new PrivacyAnalytics(),
            onRate: options.onRate || null
        };

        this.element = null;
        this.currentRating = this.options.analytics.getRating(demoId);

        this.create();
    }

    create() {
        const positions = {
            'bottom-left': 'bottom: 70px; left: 20px;',
            'bottom-right': 'bottom: 70px; right: 20px;',
            'top-left': 'top: 80px; left: 20px;',
            'top-right': 'top: 80px; right: 20px;'
        };

        this.element = document.createElement('div');
        this.element.className = 'rating-widget';
        this.element.innerHTML = `
            <span class="rating-label">Rate this demo:</span>
            <div class="rating-stars">
                ${[1, 2, 3, 4, 5].map(n => `
                    <button class="star" data-value="${n}" aria-label="Rate ${n} stars">
                        ${this.currentRating && this.currentRating >= n ? '★' : '☆'}
                    </button>
                `).join('')}
            </div>
            <span class="rating-thanks" style="display: none;">Thanks!</span>
        `;

        this.element.style.cssText = `
            position: fixed;
            ${positions[this.options.position]}
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            background: rgba(30, 30, 30, 0.9);
            border-radius: 8px;
            color: #e0e0e0;
            font-size: 13px;
            z-index: 999;
        `;

        this.injectStyles();
        this.bindEvents();
        document.body.appendChild(this.element);
    }

    injectStyles() {
        if (document.getElementById('rating-widget-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'rating-widget-styles';
        styles.textContent = `
            .rating-widget .rating-stars {
                display: flex;
                gap: 4px;
            }

            .rating-widget .star {
                background: none;
                border: none;
                font-size: 20px;
                color: #888;
                cursor: pointer;
                padding: 0;
                transition: all 0.2s ease;
            }

            .rating-widget .star:hover,
            .rating-widget .star.active {
                color: #fbbf24;
                transform: scale(1.2);
            }

            .rating-widget .rating-thanks {
                color: var(--sage, #8A9A5B);
            }
        `;
        document.head.appendChild(styles);
    }

    bindEvents() {
        const stars = this.element.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('mouseenter', () => {
                const value = parseInt(star.dataset.value);
                this.highlightStars(value);
            });

            star.addEventListener('mouseleave', () => {
                this.highlightStars(this.currentRating || 0);
            });

            star.addEventListener('click', () => {
                const value = parseInt(star.dataset.value);
                this.submitRating(value);
            });
        });
    }

    highlightStars(upTo) {
        const stars = this.element.querySelectorAll('.star');
        stars.forEach(star => {
            const value = parseInt(star.dataset.value);
            star.textContent = value <= upTo ? '★' : '☆';
            star.classList.toggle('active', value <= upTo);
        });
    }

    submitRating(value) {
        this.currentRating = value;
        this.highlightStars(value);

        this.options.analytics.rateDemo(this.demoId, value);

        // Show thanks message
        const thanks = this.element.querySelector('.rating-thanks');
        const stars = this.element.querySelector('.rating-stars');
        stars.style.display = 'none';
        thanks.style.display = 'inline';

        setTimeout(() => {
            stars.style.display = 'flex';
            thanks.style.display = 'none';
        }, 2000);

        if (this.options.onRate) {
            this.options.onRate(value);
        }
    }

    destroy() {
        if (this.element) {
            this.element.remove();
        }
    }
}

/**
 * Create analytics dashboard summary (for development)
 */
function showAnalyticsSummary(analytics) {
    const summary = analytics.getSummary();

    console.group('📊 CCAB Analytics Summary');
    console.log('Session ID:', summary.sessionId);
    console.log('Session Duration:', `${summary.sessionDuration}s`);
    console.log('Page Time:', `${summary.pageTime}s`);
    console.log('Interactions:', summary.interactions);
    console.log('Events Logged:', summary.eventCount);
    console.log('Page:', summary.page);
    console.groupEnd();

    return summary;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PrivacyAnalytics, RatingWidget, showAnalyticsSummary };
}
