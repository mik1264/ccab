# Contributing to CCAB

Thank you for your interest in contributing to CCAB (Claude Code and Algorithmic Beauty)!

## How to Contribute

### Adding New Demos

1. **Choose a template** from `templates/`:
   - `template-canvas.html` - For Canvas 2D demos
   - `template-threejs.html` - For Three.js 3D demos
   - `template-p5js.html` - For P5.js creative coding
   - `template-webgl.html` - For raw WebGL shaders

2. **Create your demo** in the appropriate gallery directory

3. **Update the gallery index** (`index.html` in that directory)

4. **Test your demo**:
   - Opens without errors
   - Works on different screen sizes
   - No console errors
   - Back navigation works

### Code Style

- **Self-contained**: Each demo should be a single HTML file with inline CSS/JS
- **No build tools**: We don't use npm, webpack, or any build system
- **CDN libraries**: External libraries should be loaded from CDN (unpkg, cdnjs)
- **Organic theme**: Follow the organic-nature design system (see `assets/css/`)

### Accessibility Requirements

- Include skip links and proper heading structure
- Ensure keyboard navigation works
- Add `@prefers-reduced-motion` support for animations
- Include seizure warnings for flashing content
- Use sufficient color contrast

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-demo`)
3. Make your changes
4. Test thoroughly
5. Commit with descriptive messages
6. Push to your fork
7. Open a Pull Request

### Commit Message Format

```
Type: Brief description

Detailed explanation (if needed)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Your Name <your@email.com>
```

Types: `Add`, `Fix`, `Update`, `Remove`, `Refactor`

## Getting Help

- Open an issue for bugs or feature requests
- Check existing demos for implementation examples
- Read `CLAUDE.md` for project architecture details

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
