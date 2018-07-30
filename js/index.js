'use strict';



var formEl = document.getElementById('user-form');
formEl.addEventListener('submit', function(event) {
  console.log('event.target', event);
  console.log(event.target.Username.value);
});