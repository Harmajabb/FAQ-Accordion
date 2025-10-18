// declaration of items and summaries (<details> and <summary>)
  const items = Array.from(document.querySelectorAll('section details'));
  const summaries = items.map(d => d.querySelector('summary'));

// close details when one is opened
  function closeAll(except) {
    for (const d of items) if (d !== except) d.removeAttribute('open');
  }

// sync aria-expanded attribute
  function syncAria(detailsEl) {
    const summary = detailsEl.querySelector('summary');
    summary.setAttribute('aria-expanded', detailsEl.open ? 'true' : 'false');
  }

// native toggle of details
  for (const d of items) {
    syncAria(d);
    d.addEventListener('toggle', () => {
      syncAria(d);
      if (d.open) closeAll(d);
    });
  }

// keyboard navigation between summaries
  summaries.forEach((summary, i) => {
    summary.addEventListener('keydown', (e) => {
      const { key } = e;
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) return;

      e.preventDefault();
      let idx = i;
      if (key === 'ArrowDown') idx = (i + 1) % summaries.length;
      if (key === 'ArrowUp')   idx = (i - 1 + summaries.length) % summaries.length;
      if (key === 'Home')      idx = 0;
      if (key === 'End')       idx = summaries.length - 1;

      summaries[idx].focus();
    });
  });

  