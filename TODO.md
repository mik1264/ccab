# CCAB Todo List

**Last Updated:** 2025-12-30
**Repository:** ccab (Claude Code and Algorithmic Beauty)
**Current Stats:** 97 galleries, 1,530+ demos

---

## 1. MEDIUM: Infrastructure & Features

### 1.1 Search & Discovery
- [ ] Implement gallery-wide text search
- [ ] Add tag filtering (framework, difficulty, category)
- [ ] Add technology filter (WebGL, WebGPU, Canvas2D)
- [ ] Add sort options (newest, popular, difficulty, name)
- [ ] Generate `demo-index.json` from file system

### 1.2 Performance Monitoring
- [ ] Add FPS counter to all demos (use templates)
- [ ] Add memory/heap usage display
- [ ] Add performance degradation warnings
- [ ] Display device info (GPU, browser, resolution)

### 1.3 Code Exploration
- [ ] Add Monaco editor for syntax highlighting
- [ ] Implement live code editing
- [ ] Add export feature (download modified demo)
- [ ] Generate shareable links with parameter state

### 1.4 Progressive Web App (PWA)
- [ ] Add service worker for offline support
- [ ] Add install prompts
- [ ] Implement background sync
- [ ] Add manifest.json

---

## 2. MEDIUM: Accessibility (WCAG 2.1 AA)

### 2.1 Screen Reader Support
- [ ] Add text descriptions for all visual content
- [ ] Ensure all interactive elements have ARIA labels
- [ ] Test with NVDA, JAWS, VoiceOver

### 2.2 Keyboard Navigation
- [ ] Ensure all controls are keyboard accessible
- [ ] Add visible focus indicators
- [ ] Test keyboard-only navigation through demos

### 2.3 Motion & Seizure Safety
- [ ] Add reduced motion support (@prefers-reduced-motion)
- [ ] Add seizure warnings for strobing content
- [ ] Add pause/stop buttons for all animations

### 2.4 Alternative Modalities
- [ ] Add audio descriptions for visual effects (sonification)
- [ ] Add high contrast mode support
- [ ] Add color-blind friendly palettes

---

## 3. MEDIUM: Educational Layer

### 3.1 Explanations System for Each Demo
- [ ] Add "What you're seeing" section
- [ ] Add "How it works" algorithm explanation
- [ ] Add "Math behind it" with LaTeX formulas
- [ ] Add "Real-world uses" applications
- [ ] Add "Try changing" parameter suggestions
- [ ] Add "Learn more" links to papers/books

### 3.2 Learning Paths
- [ ] Create Beginner Path (30 demos)
- [ ] Create Intermediate Path (40 demos)
- [ ] Create Advanced Path (30 demos)

### 3.3 Gamification
- [ ] Add challenge mode to 20 demos
- [ ] Create tasks like "Make all boids gather in center"
- [ ] Add hints and solutions
- [ ] Add comprehension checks

---

## 4. LOW: Community Features

### 4.1 Sharing System
- [ ] Implement state serialization
- [ ] Save parameters, timestamps, screenshots
- [ ] Generate shareable URLs with full state
- [ ] Add URL parameter state loading

### 4.2 Community Foundation
- [ ] Write Code of Conduct
- [ ] Create contribution guidelines
- [ ] Set up moderation tools

---

## 5. LOW: Documentation Updates

### 5.1 Update CLAUDE.md
- [ ] Update gallery counts (currently says 93 galleries, should be 97)
- [ ] Document worktree workflow
- [ ] Add sections for new galleries

### 5.2 Update README.md
- [ ] Update demo count
- [ ] Add new gallery categories
- [ ] Update technology list

---

## 6. LOW: Legal & Protection

- [ ] Add Terms of Service
- [ ] Add Privacy Policy
- [ ] Add DMCA compliance statement
- [ ] Add seizure warnings for strobing content

---

## 7. LOW: Analytics & Measurement

- [ ] Implement Plausible Analytics (privacy-first)
- [ ] Track: sessions, time, interactions
- [ ] Create demo ratings system
- [ ] Measure learning outcomes

---

## Summary

| Category | Items | Priority |
|----------|-------|----------|
| Infrastructure Features | 16 | MEDIUM |
| Accessibility | 12 | MEDIUM |
| Educational Layer | 12 | MEDIUM |
| Community Features | 7 | LOW |
| Documentation | 5 | LOW |
| Legal/Analytics | 8 | LOW |

**Total Remaining Items:** ~60

---

*All CRITICAL items completed. Remaining items are future enhancements.*
