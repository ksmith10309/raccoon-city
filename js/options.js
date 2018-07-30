'use strict';
if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}
'use strict';

var points = 0;
var varFood = document.getElementById('food');
var varHealth = document.getElementById('healthInsurance');
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
  if (clickFood === false) {
    clickFood = true;
  } else {
    clickFood = false;
  }
  console.log('clickFood: ', clickFood);
}

function functionHealth() {
  event.preventDefault(); 
  if (clickHealth === false) {
    clickHealth = true;
  } else {
    clickHealth = false;
  }
  console.log('clickHealth: ', clickHealth);
}

function functionVehicle() {
  event.preventDefault(); 
  if (clickVehicle === false) {
    clickVehicle = true;
  } else {
    clickVehicle = false;
  }
  console.log('clickVehicle: ', clickVehicle);
}

function functionClothes() {
  event.preventDefault(); 
  if (clickClothes === false) {
    clickClothes = true;
  } else {
    clickClothes = false;
  }
  console.log('clickClothes: ', clickClothes);
}

function functionHousing() {
  event.preventDefault(); 
  if (clickHousing === false) {
    clickHousing = true;
  } else {
    clickHousing = false;
  }
  console.log('clickHousing: ', clickHousing);
}

function functionSleep() {
  event.preventDefault(); 
  if (clickSleep === false) {
    clickSleep = true;
  } else {
    clickSleep = false;
  }
  console.log('clickSleep: ', clickSleep);
}

function functionDental() {
  event.preventDefault(); 
  if (clickDental === false) {
    clickDental = true;
  } else {
    clickDental = false;
  }
  console.log('clickDental: ', clickDental);
}

function functionSocial() {
  event.preventDefault(); 
  if (clickSocial === false) {
    clickSocial = true;
  } else {
    clickSocial = false;
  }
  console.log('clickSocial: ', clickSocial);
}

function functionSubmit() {
  event.preventDefault(); 

  console.log('choices are submitted');
}










