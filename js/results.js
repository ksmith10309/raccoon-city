'use strict';
if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}

var clickFood = JSON.parse(localStorage.getItem('Food'));
var clickHealth = JSON.parse(localStorage.getItem('Health'));
var clickVehicle = JSON.parse(localStorage.getItem('Vehicle'));
var clickClothes = JSON.parse(localStorage.getItem('Clothes'));
var clickHousing = JSON.parse(localStorage.getItem('Housing'));
var clickSleep = JSON.parse(localStorage.getItem('Sleep'));
var clickDental = JSON.parse(localStorage.getItem('Dental'));
var clickSocial = JSON.parse(localStorage.getItem('Social'));

if(clickFood === true) {
  console.log('true test');
  document.getElementById('food').style.visibility = 'visible';
} else if(clickFood === false) {
  document.getElementById('food').style.visibility = 'hidden';
}

if(clickHealth === true) {
  console.log('true test');
  document.getElementById('health').style.visibility = 'visible';
} else if(clickHealth === false) {
  console.log('false test');
  document.getElementById('health').style.visibility = 'hidden';
}

if(clickVehicle === true) {
  console.log('true test');
  document.getElementById('vehicle').style.visibility = 'visible';
} else if(clickVehicle === false) {
  console.log('false test');
  document.getElementById('vehicle').style.visibility = 'hidden';
}

if(clickClothes === true) {
  console.log('true test');
  document.getElementById('clothes').style.visibility = 'visible';
} else if(clickClothes === false) {
  console.log('false test');
  document.getElementById('clothes').style.visibility = 'hidden';
}

if(clickHousing === true) {
  console.log('true test');
  document.getElementById('housing').style.visibility = 'visible';
} else if(clickHousing === false) {
  console.log('false test');
  document.getElementById('housing').style.visibility = 'hidden';
}

if(clickSleep === true) {
  console.log('true test');
  document.getElementById('sleep').style.visibility = 'visible';
} else if(clickSleep === false) {
  console.log('false test');
  document.getElementById('sleep').style.visibility = 'hidden';
}

if(clickDental === true) {
  console.log('true test');
  document.getElementById('dental').style.visibility = 'visible';
} else if(clickDental === false) {
  console.log('false test');
  document.getElementById('dental').style.visibility = 'hidden';
}

if(clickSocial === true) {
  console.log('true test');
  document.getElementById('social').style.visibility = 'visible';
} else if(clickSocial === false) {
  console.log('false test');
  document.getElementById('social').style.visibility = 'hidden';
}
