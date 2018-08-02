'use strict';

var js1 = document.getElementById('i1');
// var js = [];
// for (var x = 0; x < 4; x++) {
//   js[x] = document.getElementById('ix');
// }
var js2 = document.getElementById('i2');
var js3 = document.getElementById('i3');
var js4 = document.getElementById('i4');
var js5 = document.getElementById('i5');
var js6 = document.getElementById('i6');
var js7 = document.getElementById('i7');
var js8 = document.getElementById('i8');
var js9 = document.getElementById('i9');
var js10 = document.getElementById('i10');
var js11 = document.getElementById('i11');
var js12 = document.getElementById('i12');
var js13 = document.getElementById('i13');
var js14 = document.getElementById('i14');
var js15 = document.getElementById('i15');
var js16 = document.getElementById('i16');
var js17 = document.getElementById('i17');
var js18 = document.getElementById('i18');
var js19 = document.getElementById('i19');
var js20 = document.getElementById('i20');
var js21 = document.getElementById('i21');
var js22 = document.getElementById('i22');
var js23 = document.getElementById('i23');
var js24 = document.getElementById('i24');
var jsTotal = document.getElementById('total');


var jsButtonCSS1 = document.getElementById('button1');
var jsButtonCSS2 = document.getElementById('button2');
var jsButtonCSS3 = document.getElementById('button3');
var jsButtonCSS4 = document.getElementById('button4');
var jsButtonCSS5 = document.getElementById('button5');
var jsButtonCSS6 = document.getElementById('button6');
var jsButtonCSS7 = document.getElementById('button7');
var jsButtonCSS8 = document.getElementById('button8');
var jsButtonCSS9 = document.getElementById('button9');
var jsButtonCSS10 = document.getElementById('button10');
var jsButtonCSS11 = document.getElementById('button11');
var jsButtonCSS12 = document.getElementById('button12');
var jsButtonCSS13 = document.getElementById('button13');
var jsButtonCSS14 = document.getElementById('button14');
var jsButtonCSS15 = document.getElementById('button15');
var jsButtonCSS16 = document.getElementById('button16');
var jsButtonCSS17 = document.getElementById('button17');
var jsButtonCSS18 = document.getElementById('button18');
var jsButtonCSS19 = document.getElementById('button19');
var jsButtonCSS20 = document.getElementById('button20');
var jsButtonCSS21 = document.getElementById('button21');
var jsButtonCSS22 = document.getElementById('button22');
var jsButtonCSS23 = document.getElementById('button23');
var jsButtonCSS24 = document.getElementById('button24');


var jsswitch1 = false;
var jsswitch2 = false;
var jsswitch3 = false;
var jsswitch4 = false;
var jsswitch5 = false;
var jsswitch6 = false;
var jsswitch7 = false;
var jsswitch8 = false;
var jsswitch9 = false;
var jsswitch10 = false;
var jsswitch11 = false;
var jsswitch12 = false;
var jsswitch13 = false;
var jsswitch14 = false;
var jsswitch15 = false;
var jsswitch16 = false;
var jsswitch17 = false;
var jsswitch18 = false;
var jsswitch19 = false;
var jsswitch20 = false;
var jsswitch21 = false;
var jsswitch22 = false;
var jsswitch23 = false;
var jsswitch24 = false;


var dollar = 0;


js1.addEventListener('click', calc1);
js2.addEventListener('click', calc2);
js3.addEventListener('click', calc3);
js4.addEventListener('click', calc4);
js5.addEventListener('click', calc5);
js6.addEventListener('click', calc6);
js7.addEventListener('click', calc7);
js8.addEventListener('click', calc8);
js9.addEventListener('click', calc9);
js10.addEventListener('click', calc10);
js11.addEventListener('click', calc11);
js12.addEventListener('click', calc12);
js13.addEventListener('click', calc13);
js14.addEventListener('click', calc14);
js15.addEventListener('click', calc15);
js16.addEventListener('click', calc16);
js17.addEventListener('click', calc17);
js18.addEventListener('click', calc18);
js19.addEventListener('click', calc19);
js20.addEventListener('click', calc20);
js21.addEventListener('click', calc21);
js22.addEventListener('click', calc22);
js23.addEventListener('click', calc23);
js24.addEventListener('click', calc24);


function calc1() {
  if (jsswitch1 === false) {
    jsswitch1 = true;
    dollar = dollar + 960;
    js1.style.opacity=5;
    jsButtonCSS1.classList.add('newClassJ1');
    jsTotal.textContent = '$' + dollar;
  } else {
    jsswitch1 = false;
    dollar = dollar - 960;
    js1.style.opacity=0.3;
    jsButtonCSS1.classList.remove('newClassJ1');
    jsTotal.textContent = '$' + dollar;
  }
}

function calc2() {
  if (jsswitch2 === false) {
    jsswitch2 = true;
    dollar = dollar + 720;
    js2.style.opacity=5;
    jsButtonCSS2.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch2 = false;
    dollar = dollar - 720;
    js2.style.opacity=0.3;
    jsButtonCSS2.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc3() {
  if (jsswitch3 === false) {
    jsswitch3 = true;
    dollar = dollar + 360;
    js3.style.opacity=5;
    jsButtonCSS3.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch3 = false;
    dollar = dollar - 360;
    js3.style.opacity=0.3;
    jsButtonCSS3.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc4() {
  if (jsswitch4 === false) {
    jsswitch4 = true;
    dollar = dollar + 1466;
    js4.style.opacity=5;
    jsButtonCSS4.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch4 = false;
    dollar = dollar - 1466;
    js4.style.opacity=0.3;
    jsButtonCSS4.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc5() {
  if (jsswitch5 === false) {
    jsswitch5 = true;
    dollar = dollar + 2162;
    js5.style.opacity=5;
    jsButtonCSS5.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch5 = false;
    dollar = dollar - 2162;
    js5.style.opacity=0.3;
    jsButtonCSS5.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc6() {
  if (jsswitch6 === false) {
    jsswitch6 = true;
    dollar = dollar + 207;
    js6.style.opacity=5;
    jsButtonCSS6.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch6 = false;
    dollar = dollar - 207;
    js6.style.opacity=0.3;
    jsButtonCSS6.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc7() {
  if (jsswitch7 === false) {
    jsswitch7 = true;
    dollar = dollar + 46;
    js7.style.opacity=5;
    jsButtonCSS7.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch7 = false;
    dollar = dollar - 46;
    js7.style.opacity=0.3;
    jsButtonCSS7.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc8() {
  if (jsswitch8 === false) {
    jsswitch8 = true;
    dollar = dollar + 44;
    js8.style.opacity=5;
    jsButtonCSS8.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch8 = false;
    dollar = dollar - 44;
    js8.style.opacity=0.3;
    jsButtonCSS8.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc9() {
  if (jsswitch9 === false) {
    jsswitch9 = true;
    dollar = dollar + 91;
    js9.style.opacity=5;
    jsButtonCSS9.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch9 = false;
    dollar = dollar - 91;
    js9.style.opacity=0.3;
    jsButtonCSS9.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc10() {
  if (jsswitch10 === false) {
    jsswitch10 = true;
    dollar = dollar + 97;
    js10.style.opacity=5;
    jsButtonCSS10.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch10 = false;
    dollar = dollar - 97;
    js10.style.opacity=0.3;
    jsButtonCSS10.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc11() {
  if (jsswitch11 === false) {
    jsswitch11 = true;
    dollar = dollar + 105;
    js11.style.opacity=5;
    jsButtonCSS11.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch11 = false;
    dollar = dollar - 105;
    js11.style.opacity=0.3;
    jsButtonCSS11.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc12() {
  if (jsswitch12 === false) {
    jsswitch12 = true;
    dollar = dollar + 17;
    js12.style.opacity=5;
    jsButtonCSS12.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch12 = false;
    dollar = dollar - 17;
    js12.style.opacity=0.3;
    jsButtonCSS12.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc13() {
  if (jsswitch13 === false) {
    jsswitch13 = true;
    dollar = dollar + 7;
    js13.style.opacity=5;
    jsButtonCSS13.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch13 = false;
    dollar = dollar - 7;
    js13.style.opacity=0.3;
    jsButtonCSS13.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc14() {
  if (jsswitch14 === false) {
    jsswitch14 = true;
    dollar = dollar + 168;
    js14.style.opacity=5;
    jsButtonCSS14.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch14 = false;
    dollar = dollar - 168;
    js14.style.opacity=0.3;
    jsButtonCSS14.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc15() {
  if (jsswitch15 === false) {
    jsswitch15 = true;
    dollar = dollar + 7;
    js15.style.opacity=5;
    jsButtonCSS15.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch15 = false;
    dollar = dollar - 7;
    js15.style.opacity=0.3;
    jsButtonCSS15.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc16() {
  if (jsswitch16 === false) {
    jsswitch16 = true;
    dollar = dollar + 400;
    js16.style.opacity=5;
    jsButtonCSS16.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch16 = false;
    dollar = dollar - 400;
    js16.style.opacity=0.3;
    jsButtonCSS16.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc17() {
  if (jsswitch17 === false) {
    jsswitch17 = true;
    dollar = dollar + 68;
    js17.style.opacity=5;
    jsButtonCSS17.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch17 = false;
    dollar = dollar - 68;
    js17.style.opacity=0.3;
    jsButtonCSS17.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc18() {
  if (jsswitch18 === false) {
    jsswitch18 = true;
    dollar = dollar + 200;
    js18.style.opacity=5;
    jsButtonCSS18.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch18 = false;
    dollar = dollar - 200;
    js18.style.opacity=0.3;
    jsButtonCSS18.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc19() {
  if (jsswitch19 === false) {
    jsswitch19 = true;
    dollar = dollar + 50;
    js19.style.opacity=5;
    jsButtonCSS19.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch19 = false;
    dollar = dollar - 50;
    js19.style.opacity=0.3;
    jsButtonCSS19.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc20() {
  if (jsswitch20 === false) {
    jsswitch20 = true;
    dollar = dollar + 28;
    js20.style.opacity=5;
    jsButtonCSS20.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch20 = false;
    dollar = dollar - 28;
    js20.style.opacity=0.3;
    jsButtonCSS20.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc21() {
  if (jsswitch21 === false) {
    jsswitch21 = true;
    dollar = dollar + 30;
    js21.style.opacity=5;
    jsButtonCSS21.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch21 = false;
    dollar = dollar - 30;
    js21.style.opacity=0.3;
    jsButtonCSS21.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc22() {
  if (jsswitch22 === false) {
    jsswitch22 = true;
    dollar = dollar + 66;
    js22.style.opacity=5;
    jsButtonCSS22.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch22 = false;
    dollar = dollar - 66;
    js22.style.opacity=0.3;
    jsButtonCSS22.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc23() {
  if (jsswitch23 === false) {
    jsswitch23 = true;
    dollar = dollar + 45;
    js23.style.opacity=5;
    jsButtonCSS23.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch23 = false;
    dollar = dollar - 45;
    js23.style.opacity=0.3;
    jsButtonCSS23.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  }
  console.log('dollar', dollar);
}

function calc24() {
  if (jsswitch24 === false) {
    jsswitch24 = true;
    dollar = dollar + 45;
    js24.style.opacity=5;
    jsButtonCSS24.classList.add('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;
  } else {
    jsswitch24 = false;
    dollar = dollar - 45;
    js24.style.opacity=0.3;
    jsButtonCSS24.classList.remove('newClassJ1');
    jsTotal.textContent = '$ ' + dollar;   
  }
  console.log('dollar', dollar);
}


