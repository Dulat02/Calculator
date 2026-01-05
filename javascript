// Simple calculator logic
(function () {
  const displayEl = document.getElementById('display');
  const expressionEl = document.getElementById('expression');
  const buttons = document.querySelectorAll('.btn');

  let expression = '';

  function updateDisplay() {
    displayEl.value = expression || '0';
    expressionEl.textContent = expression;
  }

  function appendValue(val) {
    // Avoid multiple leading zeros or malformed sequences handled lightly here
    if (val === '.' && /\.\d*$/.test(expression)) return; // prevent two dots in the same number
    expression += val;
    updateDisplay();
  }

  function clearAll() {
    expression = '';
    updateDisplay();
  }

  function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
  }

  function evaluateExpression() {
    if (!expression) return;
    // Allow only digits, operators, parentheses, dot and spaces to avoid execution of arbitrary code
    const safe = /^[0-9+\-*/().\s]+$/.test(expression);
    if (!safe) {
      displayEl.value = 'Error';
      expression = '';
      expressionEl.textContent = '';
      return;
    }

    try {
      // Replace × and ÷ if they somehow get into expression
      const sanitized = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
      // Use Function to evaluate in a safer scope than eval
      const result = Function('"use strict";return (' + sanitized + ')')();
      expression = String(result);
      updateDisplay();
    } catch (e) {
      displayEl.value = 'Error';
      expression = '';
      expressionEl.textContent = '';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-value');
      const action = btn.getAttribute('data-action');

      if (action === 'clear') {
        clearAll();
        return;
      }
      if (action === 'delete') {
        deleteLast();
        return;
      }
      if (action === 'equals') {
        evaluateExpression();
        return;
      }
      if (v) {
        appendValue(v);
      }
    });
  });

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/^[0-9]$/).test(key)) {
      appendValue(key);
      e.preventDefault();
      return;
    }
    if (key === '.' ) { appendValue('.'); e.preventDefault(); return; }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendValue(key); e.preventDefault(); return;
    }
    if (key === 'Enter' || key === '=') {
      evaluateExpression(); e.preventDefault(); return;
    }
    if (key === 'Backspace') {
      deleteLast(); e.preventDefault(); return;
    }
    if (key === 'Escape') {
      clearAll(); e.preventDefault(); return;
    }
    if (key === '(' || key === ')') {
      appendValue(key); e.preventDefault(); return;
    }
  });

  // Initialize
  clearAll();
})();
