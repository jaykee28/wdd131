// Get the current year
const currentYear = new Date().getFullYear();

// Insert current year into the footer
document.getElementById('copyright-year').textContent = currentYear;

// Insert last modified date into the footer
document.getElementById('last-modified').textContent = document.lastModified;
