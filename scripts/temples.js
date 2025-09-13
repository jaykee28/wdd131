
const yearSpan = document.getElementById("copyright-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("last-modified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const nav = document.querySelector('nav');
const navToggleButton = document.createElement('button');

navToggleButton.textContent = '☰'; 
navToggleButton.setAttribute('aria-label', 'Toggle menu');
navToggleButton.classList.add('nav-toggle');

nav.prepend(navToggleButton);

navToggleButton.addEventListener('click', () => {
  const ul = nav.querySelector('ul');
  if (ul) {
    ul.classList.toggle('show');
  }
});
