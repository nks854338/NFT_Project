document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.querySelector('.theme-btn');
  const body = document.body;

  // Check for saved theme preference or default to dark theme
  const currentTheme = localStorage.getItem('theme') || 'dark';
  body.classList.toggle('light-theme', currentTheme === 'light');

  // Theme toggle functionality
  themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      updateThemeIcon(theme);
  });

  // Initial icon update
  updateThemeIcon(currentTheme);

  function updateThemeIcon(theme) {
      const themeIcon = themeToggleBtn.querySelector('img');
      themeIcon.src = theme === 'light' ? './Assets/images/moon.png' : './Assets/images/sun.png';
      themeIcon.alt = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
});