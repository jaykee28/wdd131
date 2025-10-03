
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


const productSelect = document.getElementById("product");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name; // value = product name
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}


const starContainer = document.getElementById("starRating");
const ratingInput = document.getElementById("ratingInput");

if (starContainer && ratingInput) {
    const stars = starContainer.querySelectorAll("span");

    stars.forEach(star => {
        star.addEventListener("mouseover", () => {
            const val = parseInt(star.dataset.value);
            stars.forEach(s => s.classList.toggle("hover", parseInt(s.dataset.value) <= val));
        });

        star.addEventListener("mouseout", () => {
            stars.forEach(s => s.classList.remove("hover"));
        });

        star.addEventListener("click", () => {
            const val = parseInt(star.dataset.value);
            ratingInput.value = val;
            stars.forEach(s => s.classList.toggle("selected", parseInt(s.dataset.value) <= val));
        });
    });
}


const yearSpan = document.getElementById('copyright-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById('last-modified');
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;


const counterElement = document.getElementById("counter");
if (counterElement) {
    let counter = localStorage.getItem("reviewCount") || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem("reviewCount", counter);
    counterElement.textContent = `You have submitted ${counter} review${counter > 1 ? 's' : ''}.`;
}

const form = document.getElementById("reviewForm");
form.addEventListener("submit", function(e) {
    if (!ratingInput.value) {
        e.preventDefault();
        alert("Please select a rating!");
    }
});
