window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  
  function myFunction() {
     var element = document.body;
     element.classList.toggle("dark-mode");
  }





var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
var isPainting = false;
var newSize = document.getElementById("sizeOutput").value;

function setWidth(value) {
  if (isNumeric(value)) {
    paintcanvas.width = parseInt(value);
  }
}

function setHeight(value) {
  if (isNumeric(value)) {
    paintcanvas.height = parseInt(value);
  }
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function setColor(newColor) {
  color = newColor;
}

function setRadius(newRadius) {
  if (isNumeric(newRadius)) {
    radius = parseInt(newRadius);
  }
}

function isNumeric(value) {
  return !isNaN(value);
}

function startPaint() {
  isPainting = true;
}

function endPaint() {
  isPainting = false;
  context.closePath();
}

function doPaint(x, y) {
  if (isPainting) {
    paintCircle(x, y);
  }
}

function changeColor(newColor) {
  color = newColor;
}

changeColor("this.value");

function resizeBrush(newSize) {
  radius = newSize;
}







