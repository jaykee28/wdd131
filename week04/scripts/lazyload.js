
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

const images = document.querySelectorAll("img.fade");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2 
});

images.forEach(img => {
  observer.observe(img);
});
