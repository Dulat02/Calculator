# Calculator

A small, accessible calculator built with HTML, CSS, and JavaScript.

Demo
- Open `index.html` in any modern browser to run the calculator locally.

Features
- Basic arithmetic: addition, subtraction, multiplication, division
- Parentheses support
- Clickable buttons and keyboard support:
  - Numbers: 0-9
  - Decimal: `.`
  - Operators: `+`, `-`, `*`, `/`
  - Evaluate: `Enter` or `=`
  - Delete: `Backspace`
  - Clear: `Escape` or `C` button
- Basic input sanitization to avoid executing arbitrary code

Files
- `index.html` — markup and app container
- `styles.css` — styling
- `script.js` — calculator logic
- `README.md` — this file
- `LICENSE` — MIT license

Run locally
1. Clone or create a repo and add the files.
2. Open `index.html` directly in the browser, or:
   - Use the VS Code Live Server extension or any static server:
     - Python 3: `python -m http.server 8000` (then open http://localhost:8000)
     - Node: `npx http-server` (install `http-server` globally to use without `npx`)

Publish to GitHub (quick commands)
1. Initialize and commit locally:
   ```
   git init
   git add .
   git commit -m "Add simple calculator"
   ```
2. Create a repository on GitHub, then push:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

License
- This project is licensed under the MIT License. See the bundled `LICENSE` file for details.

Contributing
- Feel free to open issues or pull requests. Suggestions:
  - Add memory (M+/M-) or memory recall
  - Add a history panel
  - Add scientific functions (sin, cos, log, pow)
  - Improve parsing for unary operators and better error handling

Credits
- Built with plain HTML, CSS, and JavaScript.
