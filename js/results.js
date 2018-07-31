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

