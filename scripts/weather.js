
const temperature = 18; // °C
const windSpeed = 10;   // km/h

function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

function displayWindChill() {
  const windchillElement = document.getElementById('windchill');
  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windchillElement.textContent = chill.toFixed(1) + '°C';
  } else {
    windchillElement.textContent = "N/A";
  }
}

function displayFooterInfo() {
  const yearElement = document.getElementById('copyright-year');
  const lastModifiedElement = document.getElementById('last-modified');

  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  lastModifiedElement.textContent = document.lastModified;
}

window.addEventListener('DOMContentLoaded', () => {
  displayWindChill();
  displayFooterInfo();
});
