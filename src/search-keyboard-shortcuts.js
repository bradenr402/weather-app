const searchField = document.getElementById('search');
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault(); // avoid triggering browser shortcuts
    searchField.focus();
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    searchField.blur();
  }
});
