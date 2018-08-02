'use strict';
if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}

var nameEl = document.getElementById('name');
nameEl.textContent = userName;
var nameEl2 = document.getElementById('name2');
nameEl2.textContent = userName;

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
  document.getElementById('food2').style.display = 'none';
} else if(clickFood === false) {
  document.getElementById('food').style.visibility = 'hidden';
  document.getElementById('food2').style.display = 'inline-block';
}

if(clickHealth === true) {
  console.log('true test');
  document.getElementById('health').style.visibility = 'visible';
  document.getElementById('health2').style.display = 'none';
} else if(clickHealth === false) {
  console.log('false test');
  document.getElementById('health').style.visibility = 'hidden';
  document.getElementById('health2').style.display = 'inline-block';
}

if(clickVehicle === true) {
  console.log('true test');
  document.getElementById('vehicle').style.visibility = 'visible';
  document.getElementById('vehicle2').style.display = 'none';
} else if(clickVehicle === false) {
  console.log('false test');
  document.getElementById('vehicle').style.visibility = 'hidden';
  document.getElementById('vehicle2').style.display = 'inline-block';
}

if(clickClothes === true) {
  console.log('true test');
  document.getElementById('clothes').style.visibility = 'visible';
  document.getElementById('clothes2').style.display = 'none';
} else if(clickClothes === false) {
  console.log('false test');
  document.getElementById('clothes').style.visibility = 'hidden';
  document.getElementById('clothes2').style.display = 'inline-block';
}

if(clickHousing === true) {
  console.log('true test');
  document.getElementById('housing').style.visibility = 'visible';
  document.getElementById('housing2').style.display = 'none';
} else if(clickHousing === false) {
  console.log('false test');
  document.getElementById('housing').style.visibility = 'hidden';
  document.getElementById('housing2').style.display = 'inline-block';
}

if(clickSleep === true) {
  console.log('true test');
  document.getElementById('sleep').style.visibility = 'visible';
  document.getElementById('sleep2').style.display = 'none';
} else if(clickSleep === false) {
  console.log('false test');
  document.getElementById('sleep').style.visibility = 'hidden';
  document.getElementById('sleep2').style.display = 'inline-block';
}

if(clickDental === true) {
  console.log('true test');
  document.getElementById('dental').style.visibility = 'visible';
  document.getElementById('dental2').style.display = 'none';
} else if(clickDental === false) {
  console.log('false test');
  document.getElementById('dental').style.visibility = 'hidden';
  document.getElementById('dental2').style.display = 'inline-block';
}

if(clickSocial === true) {
  console.log('true test');
  document.getElementById('social').style.visibility = 'visible';
  document.getElementById('social2').style.display = 'none';
} else if(clickSocial === false) {
  console.log('false test');
  document.getElementById('social').style.visibility = 'hidden';
  document.getElementById('social2').style.display = 'inline-block';
}

var pikeplacebg = document.getElementById('pikeplacebg');
var spaceneedlebg = document.getElementById('spaceneedlebg');
var trollbg = document.getElementById('trollbg');
var clearbg = document.getElementById('clearbg');

pikeplacebg.addEventListener('click', functionPikeplacebg);
spaceneedlebg.addEventListener('click', functionSpaceneedlebg);
trollbg.addEventListener('click', functionTrollbg);
clearbg.addEventListener('click', functionClearbg);


function functionPikeplacebg() {
  document.body.style.backgroundImage = 'url(img/results/pikeplacebg.jpg)';
}

function functionSpaceneedlebg() {
  document.body.style.backgroundImage = 'url(img/results/spaceneedlebg.jpg)';
}

function functionTrollbg() {
  document.body.style.backgroundImage = 'url(img/results/trollbg.jpg)';
}

function functionClearbg() {
  document.body.style.backgroundImage = '';
}

var varSubmit = document.getElementById('submit');
varSubmit.addEventListener('click', functionSubmit);

function functionSubmit() {
  event.preventDefault();
  window.location.href = 'calculator.html';
}