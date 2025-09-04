// getdates.js

// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

