var points = 0;
var pointEl = document.getElementById('pointtotal');
pointEl.textContent = points;

var canvas = document.getElementById('canvas');
var ctx;
var background;
var falling;

var oranges = 5;
var fallingOranges = [];
var cookies = 5;
var fallingCookies = [];
var plates = 5;
var fallingPlates = [];

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function drawBackground() {
  ctx.drawImage(background, 0, 0);
}

function draw() {
  drawBackground();

  for (var i = 0; i < oranges; i++) {
    ctx.drawImage (fallingOranges[i].image, fallingOranges[i].x, fallingOranges[i].y, fallingOranges[i].width, fallingOranges[i].height);

    fallingOranges[i].y += fallingOranges[i].speed;
    if (fallingOranges[i].y > 500) {
      fallingOranges[i].y = -50;
      fallingOranges[i].x = Math.random() * 350;
    }
  }

  for (var j = 0; j < cookies; j++) {
    ctx.drawImage (fallingCookies[j].image, fallingCookies[j].x, fallingCookies[j].y, fallingCookies[j].width, fallingCookies[j].height);

    fallingCookies[j].y += fallingCookies[j].speed;
    if (fallingCookies[j].y > 500) {
      fallingCookies[j].y = -50;
      fallingCookies[j].x = Math.random() * 350;
    }
  }

  for (var k = 0; k < plates; k++) {
    ctx.drawImage (fallingPlates[k].image, fallingPlates[k].x, fallingPlates[k].y, fallingPlates[k].width, fallingPlates[k].height);

    fallingPlates[k].y += fallingPlates[k].speed;
    if (fallingPlates[k].y > 500) {
      fallingPlates[k].y = -50;
      fallingPlates[k].x = Math.random() * 350;
    }
  }

  canvas.onclick = function(evt) {
    var mouselocation = getMousePos(canvas, evt);
    for (var i = 0; i < oranges; i++) {
      if (mouselocation.x > fallingOranges[i].x && mouselocation.x < fallingOranges[i].x + 50 && mouselocation.y > fallingOranges[i].y && mouselocation.y < fallingOranges[i].y + 50) {
        fallingOranges[i].x = -50;
      }
    }
    for (var j = 0; j < cookies; j++) {
      if (mouselocation.x > fallingCookies[j].x && mouselocation.x < fallingCookies[j].x + 50 && mouselocation.y > fallingCookies[j].y && mouselocation.y < fallingCookies[j].y + 50) {
        fallingCookies[j].x = -50;
        points++;
        pointEl.textContent = points;
        if (points >= 30) {
          clearInterval(falling);
          ctx.font = '30px Black Ops One';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.fillText('You Win!!', canvas.width/2, canvas.height/2);
        }
      }
    }
    for (var k = 0; k < plates; k++) {
      if (mouselocation.x > fallingPlates[k].x && mouselocation.x < fallingPlates[k].x + 50 && mouselocation.y > fallingPlates[k].y && mouselocation.y < fallingPlates[k].y + 50) {
        fallingPlates[k].x = -50;
        points--;
        pointEl.textContent = points;
      }
    }
  };
}

function setup() {
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');

    background = new Image();
    background.src = '../img/background.jpg';
    falling = setInterval(draw, 20);

    for (var i = 0; i < oranges; i++) {
      var fallingOrange = new Object();
      fallingOrange.image = new Image();
      fallingOrange.image.src = 'orange.png';

      fallingOrange.x = Math.random() * 350;
      fallingOrange.y = Math.random() * -50;
      fallingOrange.width = 50;
      fallingOrange.height = 50;
      fallingOrange.speed = 3 + Math.random() * 5;
      fallingOranges.push(fallingOrange);
    }
    for (var j = 0; j < cookies; j++) {
      var fallingCookie = new Object();
      fallingCookie.image = new Image();
      fallingCookie.image.src = 'cookie.png';
      fallingCookie.x = Math.random() * 350;
      fallingCookie.y = Math.random() * -50;
      fallingCookie.width = 50;
      fallingCookie.height = 50;
      fallingCookie.speed = 3 + Math.random() * 5;
      fallingCookies.push(fallingCookie);
    }

    for (var k = 0; k < plates; k++) {
      var fallingPlate = new Object();
      fallingPlate.image = new Image();
      fallingPlate.image.src = 'plate.png';
      fallingPlate.x = Math.random() * 350;
      fallingPlate.y = Math.random() * -50;
      fallingPlate.width = 50;
      fallingPlate.height = 50;
      fallingPlate.speed = 3 + Math.random() * 5;
      fallingPlates.push(fallingPlate);
    }
  }
}

setup();