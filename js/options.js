'use strict';
if(localStorage.userName) {
  console.log('test');
  var userName = JSON.parse(localStorage.getItem('userName'));
  console.log(userName);
}