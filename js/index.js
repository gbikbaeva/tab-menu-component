document.querySelectorAll('.tabs__chip').forEach(tabChip => {
  tabChip.addEventListener('click', () => {
    const value = tabChip.getAttribute('data-value');

    document.querySelectorAll('.tabs__chip').forEach(item => {
      const isSelected = item.getAttribute('data-value') === value;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-selected', isSelected);
    });

    document.querySelectorAll('.tabs__panel').forEach(tabPanel => {
      tabPanel.hidden = tabPanel.getAttribute('data-value') !== value;
    });
  });
});
