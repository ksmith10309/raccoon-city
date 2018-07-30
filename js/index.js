'use strict';



var formEl = document.getElementById('user-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('event.target', event);
  console.log(event.target.Username.value);
  var userName = event.target.Username.value;
  console.log(userName);
  // need to stringify and store to local storage
  localStorage.setItem('userName',JSON.stringify(userName));
  window.location.href = 'options.html';
});