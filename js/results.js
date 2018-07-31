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
} else if(clickHealth === false) {
  console.log('false test');
}

if(clickVehicle === true) {
  console.log('true test');
} else if(clickVehicle === false) {
  console.log('false test');
}

if(clickClothes === true) {
  console.log('true test');
} else if(clickClothes === false) {
  console.log('false test');
}

if(clickHousing === true) {
  console.log('true test');
} else if(clickHousing === false) {
  console.log('false test');
}

if(clickSleep === true) {
  console.log('true test');
} else if(clickSleep === false) {
  console.log('false test');
}

if(clickDental === true) {
  console.log('true test');
} else if(clickDental === false) {
  console.log('false test');
}

if(clickSocial === true) {
  console.log('true test');
} else if(clickSocial === false) {
  console.log('false test');
}
