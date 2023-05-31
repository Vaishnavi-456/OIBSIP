// Add a fade-in effect to the sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
  section.style.opacity = 0;
  setTimeout(() => {
    section.classList.add('fade-in');
    section.style.opacity = 1;
  }, index * 300);
});
