var objImage;
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
document.onkeydown = getKeyAndMove;
document.getElementById("static").classList.toggle("walkhidden");
// document.getElementById("walk1").classList.toggle("walkvisible");
document.getElementById("walk2").classList.toggle("walkhidden");



function init() {
  objImage = document.getElementById("walk");
  objImage.style.position = "absolute";
  objImage.style.left = "1vw";
  objImage.style.bottom = "11.5vh";
}
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      console.log("left");
      break;
    case 38: //Up arrow key
      console.log("up");
      objImage.classList.toggle("jump");

      break;
    case 39: //right arrow key
      moveRight();
      console.log("right");

      break;
    case 40: //down arrow key
      console.log("down");

      break;
  }
}
function moveLeft() {
  var pos = parseInt(objImage.style.left);
  if (pos >= 20) {
    objImage.style.left = pos - 5 + "px";
    console.log(pos);
  }
}
function moveUp() {
  objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
}
function moveRight() {
  var pos = parseInt(objImage.style.left);
  if (pos <= w - 120) {
    for (var i = 0; i <= 10000; i++) {

      if (i % 2 == 0) {
        // document.getElementById("static").classList.toggle("walkhidden");
        document.getElementById("walk1").classList.toggle("walkhidden");
        document.getElementById("walk2").classList.toggle("walkhidden");
        objImage.style.left = pos + 5 + "px";
        console.log(pos);
        console.log(i);
      }
      if (i % 2 != 0) {
        // document.getElementById("static").classList.toggle("walkhidden");
        document.getElementById("walk2").classList.toggle("walkhiiden");
        document.getElementById("walk1").classList.toggle("walkhidden");
        objImage.style.left = pos + 5 + "px";
        console.log(pos);
        console.log(i);
      }
    }
  }
}
function moveDown() {
  objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
}
window.onload = init;
