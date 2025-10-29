const themeIcon = document.querySelector('#themechange');
themeIcon.parentElement.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.toggle('light-theme');
});