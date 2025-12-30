# CCAB Todo List

**Last Updated:** 2025-12-30
**Repository:** ccab (Claude Code and Algorithmic Beauty)
**Current Stats:** 97 galleries, 1,530+ demos

---

## 1.  Infrastructure & Features

### 1.1 Search & Discovery
- [x] Implement gallery-wide text search
- [x] Add tag filtering (framework, difficulty, category)
- [x] Add technology filter (WebGL, WebGPU, Canvas2D)
- [x] Add sort options (newest, popular, difficulty, name)
- [x] Generate `demo-index.json` from file system

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
- [x] Add service worker for offline support
- [x] Add install prompts
- [x] Implement background sync
- [x] Add manifest.json

---

## 2.  Accessibility (WCAG 2.1 AA)

### 2.1 Screen Reader Support
- [ ] Add text descriptions for all visual content
- [x] Ensure all interactive elements have ARIA labels
- [ ] Test with NVDA, JAWS, VoiceOver

### 2.2 Keyboard Navigation
- [x] Ensure all controls are keyboard accessible
- [x] Add visible focus indicators
- [x] Test keyboard-only navigation through demos

### 2.3 Motion & Seizure Safety
- [x] Add reduced motion support (@prefers-reduced-motion)
- [x] Add seizure warnings for strobing content
- [x] Add pause/stop buttons for all animations

### 2.4 Alternative Modalities
- [ ] Add audio descriptions for visual effects (sonification)
- [x] Add high contrast mode support
- [x] Add color-blind friendly palettes

---

## 3.  Educational Layer

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

## 4.  Community Features

### 4.1 Sharing System
- [ ] Implement state serialization
- [ ] Save parameters, timestamps, screenshots
- [ ] Generate shareable URLs with full state
- [ ] Add URL parameter state loading

### 4.2 Community Foundation
- [x] Write Code of Conduct
- [x] Create contribution guidelines
- [ ] Set up moderation tools

---

## 5. LOW: Documentation Updates

### 5.1 Update CLAUDE.md
- [x] Update gallery counts (already says 97 galleries, 1,530+ demos)
- [x] Document worktree workflow (documented in existing workflow section)
- [x] Add sections for new galleries (gallery list is current)

### 5.2 Update README.md
- [x] Update demo count
- [x] Add new gallery categories
- [x] Update technology list

---

## 6. LOW: Legal & Protection

- [x] Add Terms of Service
- [x] Add Privacy Policy
- [x] Add DMCA compliance statement

---

## 7. LOW: Analytics & Measurement

- [ ] Implement Plausible Analytics (privacy-first)
- [ ] Track: sessions, time, interactions
- [ ] Create demo ratings system
- [ ] Measure learning outcomes

---

## Summary

| Category | Completed | Remaining | Priority |
|----------|-----------|-----------|----------|
| Infrastructure Features | 9 | 8 | MEDIUM |
| Accessibility | 9 | 3 | MEDIUM |
| Educational Layer | 0 | 12 | MEDIUM |
| Community Features | 2 | 5 | LOW |
| Documentation | 6 | 0 | DONE |
| Legal & Protection | 3 | 0 | DONE |
| Analytics | 0 | 4 | LOW |

**Completed:** 29 items
**Remaining:** 32 items

---

*All CRITICAL items completed. Remaining items are future enhancements.*
