const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let radius = 10;
const PI = 3.14159;
let area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;
