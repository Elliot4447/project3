document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('theme-dark');
    toggle.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('theme-dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  var back = document.getElementById('backToTop');
  if (!back) {
    back = document.createElement('button');
    back.id = 'backToTop';
    back.textContent = '↑';
    back.type = 'button';
    back.style.display = 'none';
    document.body.appendChild(back);
  }

  back.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) back.style.display = 'inline-block';
    else back.style.display = 'none';
  });
});