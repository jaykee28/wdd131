// Array of services
const services = [
  { name: "HTML & CSS Lessons", price: 150 },
  { name: "C# Lessons", price: 200 },
  { name: "Java Lessons", price: 200 },
  { name: "Python Lessons", price: 180 },
  { name: "Printing / Scanning", price: 50 },
  { name: "Stationery & Internet Café", price: 20 }
];

function displayServices() {
  const servicesContainer = document.getElementById("services-list");
  servicesContainer.innerHTML = "";
  services.forEach(service => {
    servicesContainer.innerHTML += `<li>${service.name} - R${service.price}</li>`;
  });
}

document.getElementById("show-services").addEventListener("click", displayServices);

function checkBudget() {
  const budget = parseInt(document.getElementById("budget").value);
  const affordable = services.filter(service => service.price <= budget);

  let output = "";
  if (affordable.length === 0) {
    output = "No services fit your budget.";
  } else {
    output = `You can afford these services: ${affordable.map(s => s.name).join(", ")}`;
  }

  document.getElementById("budget-result").innerHTML = output;
}


document.getElementById("save-budget").addEventListener("click", () => {
  const budget = document.getElementById("budget").value;
  localStorage.setItem("lastBudget", budget);
  alert("Budget saved!");
});


window.onload = () => {
  const savedBudget = localStorage.getItem("lastBudget");
  if(savedBudget) {
    document.getElementById("budget").value = savedBudget;
  }
};
