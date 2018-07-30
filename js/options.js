'use strict';
if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}
'use strict';

var points = 5;

if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}


var varFood = document.getElementById('food');
var varHealth = document.getElementById('health');
var varVehicle = document.getElementById('vehicle');
var varClothes = document.getElementById('clothes');
var varHousing = document.getElementById('housing');
var varSleep = document.getElementById('sleep');
var varDental = document.getElementById('dental');
var varSocial = document.getElementById('social');
var varSubmit = document.getElementById('submit');

var clickFood = false;
var clickHealth = false;
var clickVehicle = false;
var clickClothes = false;
var clickHousing = false;
var clickSleep = false;
var clickDental = false;
var clickSocial = false;


varFood.addEventListener('click', functionFood);
varHealth.addEventListener('click', functionHealth);
varVehicle.addEventListener('click', functionVehicle);
varClothes.addEventListener('click', functionClothes);
varHousing.addEventListener('click', functionHousing);
varSleep.addEventListener('click', functionSleep);
varDental.addEventListener('click', functionDental);
varSocial.addEventListener('click', functionSocial);
varSubmit.addEventListener('click', functionSubmit);


function functionFood() {
  event.preventDefault();
  var foodEl = document.getElementById('food');
  if (clickFood === false && points > 0) {
    clickFood = true;
    points--;
    foodEl.style.backgroundColor='red';
  } else if (clickFood === true) {
    clickFood = false;
    points++;
    foodEl.style.backgroundColor='green';
  }
  console.log('clickFood: ', clickFood);
}

function functionHealth() {
  event.preventDefault();
  var healthEl = document.getElementById('health');
  if (clickHealth === false && points > 0) {
    clickHealth = true;
    points--;
    healthEl.style.backgroundColor='red';
  } else if (clickHealth === true) {
    clickHealth = false;
    points++;
    healthEl.style.backgroundColor='green';
  }
  console.log('clickHealth: ', clickHealth);
}

function functionVehicle() {
  event.preventDefault();
  var vehicleEl = document.getElementById('vehicle');
  if (clickVehicle === false && points > 0) {
    clickVehicle = true;
    points--;
    vehicleEl.style.backgroundColor='red';
  } else if (clickVehicle === true) {
    clickVehicle = false;
    points++;
    vehicleEl.style.backgroundColor='green';
  }
  console.log('clickVehicle: ', clickVehicle);
}

function functionClothes() {
  event.preventDefault();
  var clothesEl = document.getElementById('clothes');
  if (clickClothes === false && points > 0) {
    clickClothes = true;
    points--;
    clothesEl.style.backgroundColor='red';
  } else if (clickClothes === true) {
    clickClothes = false;
    points++;
    clothesEl.style.backgroundColor='green';
  }
  console.log('clickClothes: ', clickClothes);
}

function functionHousing() {
  event.preventDefault();
  var housingEl = document.getElementById('housing');
  if (clickHousing === false && points > 0) {
    clickHousing = true;
    points--;
    housingEl.style.backgroundColor='red';
  } else if (clickHousing === true) {
    clickHousing = false;
    points++;
    housingEl.style.backgroundColor='green';
  }
  console.log('clickHousing: ', clickHousing);
}

function functionSleep() {
  event.preventDefault();
  var sleepEl = document.getElementById('sleep');
  if (clickSleep === false && points > 0) {
    clickSleep = true;
    points--;
    sleepEl.style.backgroundColor='red';
  } else if (clickSleep === true) {
    clickSleep = false;
    points++;
    sleepEl.style.backgroundColor='green';
  }
  console.log('clickSleep: ', clickSleep);
}

function functionDental() {
  event.preventDefault();
  var dentalEl = document.getElementById('dental');
  if (clickDental === false && points > 0) {
    clickDental = true;
    points--;
    dentalEl.style.backgroundColor='red';
  } else if (clickDental === true) {
    clickDental = false;
    points++;
    dentalEl.style.backgroundColor='green';
  }
  console.log('clickDental: ', clickDental);
}

function functionSocial() {
  event.preventDefault();
  var socialEl = document.getElementById('social');
  if (clickSocial === false && points > 0) {
    clickSocial = true;
    points--;
    socialEl.style.backgroundColor='red';
  } else if (clickSocial === true) {
    clickSocial = false;
    points++;
    socialEl.style.backgroundColor='green';
  }
  console.log('clickSocial: ', clickSocial);
}

function functionSubmit() {
  event.preventDefault();

  console.log('choices are submitted');
}