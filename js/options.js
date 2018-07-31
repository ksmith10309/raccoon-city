'use strict';

if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}

var points = 5;
var pointsEl = document.getElementById('points');
pointsEl.textContent = points;

var foodEl = document.getElementById('food');
var healthEl = document.getElementById('health');
var vehicleEl = document.getElementById('vehicle');
var clothesEl = document.getElementById('clothes');
var housingEl = document.getElementById('housing');
var sleepEl = document.getElementById('sleep');
var dentalEl = document.getElementById('dental');
var socialEl = document.getElementById('social');

var varSubmit = document.getElementById('submit');

var clickFood = false;
var clickHealth = false;
var clickVehicle = false;
var clickClothes = false;
var clickHousing = false;
var clickSleep = false;
var clickDental = false;
var clickSocial = false;


foodEl.addEventListener('click', functionFood);
healthEl.addEventListener('click', functionHealth);
vehicleEl.addEventListener('click', functionVehicle);
clothesEl.addEventListener('click', functionClothes);
housingEl.addEventListener('click', functionHousing);
sleepEl.addEventListener('click', functionSleep);
dentalEl.addEventListener('click', functionDental);
socialEl.addEventListener('click', functionSocial);

varSubmit.addEventListener('click', functionSubmit);


function functionFood() {
  event.preventDefault();
  if (clickFood === false && points > 0) {
    clickFood = true;
    points--;
    foodEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickFood === true) {
    clickFood = false;
    points++;
    foodEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickFood: ', clickFood);
}

function functionHealth() {
  event.preventDefault();
  if (clickHealth === false && points > 0) {
    clickHealth = true;
    points--;
    healthEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickHealth === true) {
    clickHealth = false;
    points++;
    healthEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickHealth: ', clickHealth);
}

function functionVehicle() {
  event.preventDefault();
  if (clickVehicle === false && points > 0) {
    clickVehicle = true;
    points--;
    vehicleEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickVehicle === true) {
    clickVehicle = false;
    points++;
    vehicleEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickVehicle: ', clickVehicle);
}

function functionClothes() {
  event.preventDefault();
  if (clickClothes === false && points > 0) {
    clickClothes = true;
    points--;
    clothesEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickClothes === true) {
    clickClothes = false;
    points++;
    clothesEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickClothes: ', clickClothes);
}

function functionHousing() {
  event.preventDefault();
  if (clickHousing === false && points > 0) {
    clickHousing = true;
    points--;
    housingEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickHousing === true) {
    clickHousing = false;
    points++;
    housingEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickHousing: ', clickHousing);
}

function functionSleep() {
  event.preventDefault();
  if (clickSleep === false && points > 0) {
    clickSleep = true;
    points--;
    sleepEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickSleep === true) {
    clickSleep = false;
    points++;
    sleepEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickSleep: ', clickSleep);
}

function functionDental() {
  event.preventDefault();
  if (clickDental === false && points > 0) {
    clickDental = true;
    points--;
    dentalEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickDental === true) {
    clickDental = false;
    points++;
    dentalEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickDental: ', clickDental);
}

function functionSocial() {
  event.preventDefault();
  if (clickSocial === false && points > 0) {
    clickSocial = true;
    points--;
    socialEl.style.backgroundColor='red';
    pointsEl.textContent = points;
  } else if (clickSocial === true) {
    clickSocial = false;
    points++;
    socialEl.style.backgroundColor='green';
    pointsEl.textContent = points;
  }
  console.log('clickSocial: ', clickSocial);
}



function functionSubmit() {
  event.preventDefault();
  localStorage.setItem('Food',JSON.stringify(clickFood));
  localStorage.setItem('Health',JSON.stringify(clickHealth));
  localStorage.setItem('Vehicle',JSON.stringify(clickVehicle));
  localStorage.setItem('Clothes',JSON.stringify(clickClothes));
  localStorage.setItem('Housing',JSON.stringify(clickHousing));
  localStorage.setItem('Sleep',JSON.stringify(clickSleep));
  localStorage.setItem('Dental',JSON.stringify(clickDental));
  localStorage.setItem('Social',JSON.stringify(clickSocial));
  toResults();
  function toResults(){window.location.href = 'results.html';}
}