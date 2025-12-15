# CCAB Test Suite

Comprehensive testing infrastructure for the CCAB (Claude Code and Algorithmic Beauty) visualization gallery.

## Quick Start

```bash
# Run all quick tests (no server needed)
python tests/run_all_tests.py --quick

# Run all tests (starts server automatically)
python tests/run_all_tests.py

# Run browser tests only
python tests/run_all_tests.py --browser

# Run with existing server
python tests/run_all_tests.py --no-server
```

## Test Categories

### 1. Static Validation (No Browser)

| Test | File | Description |
|------|------|-------------|
| Link Validation | `test_links.py` | Validates all internal links, back links, and gallery structure |
| HTML/CSS Validation | `test_html_css_validation.py` | Validates HTML5 structure, meta tags, and CSS syntax |

### 2. Unit Tests

| Test | File | Description |
|------|------|-------------|
| JavaScript Utils | `test-demo-utils.js` | Unit tests for `demo-utils.js` library |
| Browser Runner | `test-demo-utils.html` | Browser-based test runner |

### 3. Browser Tests (Playwright)

| Test | File | Description |
|------|------|-------------|
| Demo Tests | `../test_demos.py` | Sample demo testing across technologies |
| Accessibility | `test_accessibility.py` | WCAG 2.1 Level AA compliance (axe-core) |
| Template Validation | `test_templates.py` | Validates demo templates |
| Cross-Browser | `test_cross_browser.py` | Tests across Chromium, Firefox, WebKit |
| Performance | `test_performance.py` | FPS, frame timing, memory metrics |
| Visual Regression | `test_visual_regression.py` | Screenshot comparison testing |

## Prerequisites

### Python Dependencies

```bash
pip install playwright
playwright install  # Install browsers
playwright install-deps  # Install system deps
```

### Optional Dependencies

```bash
pip install pillow  # For visual regression image diffs
```

### Node.js (for JS unit tests)

```bash
node --version  # Requires Node.js 16+
```

## Running Individual Tests

### Link Validation

```bash
python tests/test_links.py
```

Validates:
- All internal `href` and `src` links
- Back navigation links (`../index.html`)
- Gallery index → demo links
- Anchor links (`#section`)

### HTML/CSS Validation

```bash
python tests/test_html_css_validation.py
```

Validates:
- HTML5 doctype and structure
- Required meta tags (charset, viewport)
- Language attributes
- CSS syntax in `<style>` tags

### Accessibility Testing

```bash
# Start server first
python -m http.server 8000 &

python tests/test_accessibility.py
```

Uses axe-core to check WCAG 2.1 Level AA:
- Color contrast ratios
- Missing alt text
- Label associations
- Heading hierarchy
- Landmark regions

### Cross-Browser Testing

```bash
python tests/test_cross_browser.py
```

Tests across:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

### Performance Testing

```bash
python tests/test_performance.py
```

Measures:
- Frames per second (target: 60 FPS)
- Frame timing consistency
- Slow frame detection
- Memory usage
- Load times

### Visual Regression

```bash
# Create/update baselines
python tests/test_visual_regression.py --update

# Run comparison tests
python tests/test_visual_regression.py
```

Directories:
- `visual_baselines/` - Reference screenshots
- `visual_current/` - Current screenshots
- `visual_diffs/` - Difference images

### Template Validation

```bash
python tests/test_templates.py
```

Validates templates in `templates/`:
- Required elements (loading, error, FPS counter)
- Feature coverage (retina, resize, animation)
- Runtime behavior

## CI/CD Integration

GitHub Actions workflow in `.github/workflows/ci.yml`:

```yaml
# Runs on push/PR to main
- validate: Link & HTML/CSS validation
- unit-tests: JavaScript unit tests
- browser-tests: Multi-browser Playwright tests
- accessibility: WCAG compliance
- templates: Template validation
- visual-regression: Screenshot comparison (PRs only)
- performance: FPS benchmarks (main branch only)
```

## Test Results

Results are saved as JSON files:
- `test_results_combined.json` - Combined test run
- `test_results_accessibility.json` - Accessibility results
- `test_results_cross_browser.json` - Cross-browser results
- `test_results_performance.json` - Performance metrics
- `test_results_visual.json` - Visual regression results
- `test_results_html_css.json` - HTML/CSS validation

## Adding New Tests

### Python Test Template

```python
#!/usr/bin/env python3
"""Test description"""

import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.resolve()

def main():
    # Test implementation
    passed = True

    # Return 0 for success, 1 for failure
    return 0 if passed else 1

if __name__ == "__main__":
    sys.exit(main())
```

### JavaScript Test Template

Add tests to `test-demo-utils.js`:

```javascript
runner.test('description', () => {
    assertEqual(actual, expected);
});
```

## Coverage Goals

| Area | Current | Target |
|------|---------|--------|
| Link validation | 100% | 100% |
| HTML structure | 100% | 100% |
| Accessibility | Sample | Full |
| Cross-browser | Sample | Full |
| Visual regression | Gallery pages | All pages |
| Performance | Animated demos | All demos |

## Troubleshooting

### Server not starting

```bash
# Kill existing servers
pkill -f "http.server"

# Start manually
python -m http.server 8000
```

### Playwright installation issues

```bash
# Install with system dependencies
playwright install --with-deps
```

### Visual regression differences

```bash
# Reset baselines
rm -rf tests/visual_baselines
python tests/test_visual_regression.py --update
```
