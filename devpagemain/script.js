var objImage;
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
document.onkeydown = getKeyAndMove;
document.getElementById("static").classList.toggle("walkhidden");
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
      break;
    case 38: //Up arrow key
      moveup();

      break;
    case 39: //right arrow key
      moveRight();

      break;
  }
}
function moveLeft() {
  var pos = parseInt(objImage.style.left);
  if (pos >= 20) {
    for (var i = 0; i <= 10000; i++) {
      if (i % 2 == 0) {
        document.getElementById("walk1").classList.toggle("walkhidden");
        document.getElementById("walk2").classList.toggle("walkhidden");

        objImage.style.left = pos - 5 + "px";
        console.log(pos);
        console.log(i);
      }
      if (i % 2 != 0) {
        document.getElementById("walk2").classList.toggle("walkhiiden");
        document.getElementById("walk1").classList.toggle("walkhidden");

        objImage.style.left = pos - 5 + "px";
        console.log(pos);
        console.log(i);
      }
    }
  }
}

function moveRight() {
  var pos = parseInt(objImage.style.left);
  if (pos <= w - 120) {
    for (var i = 0; i <= 10000; i++) {
      if (i % 2 == 0) {
        document.getElementById("walk1").classList.toggle("walkhidden");
        document.getElementById("walk2").classList.toggle("walkhidden");
        objImage.style.left = pos + 5 + "px";
        objImage.style.transform = scaleX(1);

        console.log(pos);
        console.log(i);
      }
      if (i % 2 != 0) {
        document.getElementById("walk2").classList.toggle("walkhiiden");
        document.getElementById("walk1").classList.toggle("walkhidden");
        objImage.style.left = pos + 5 + "px";
        objImage.style.transform = scaleX(1);

        console.log(pos);
        console.log(i);
      }
    }
  }
}
function moveup() {
  document.getElementById("popupfront").style.scale=0;

  document.getElementById("popupback").style.scale=0;

  document.getElementById("popupvideo").style.scale=0;

  document.getElementById("popupdesign").style.scale=0;


  brick1pos = document.getElementById("bricks1").offsetLeft;
  brick2pos = document.getElementById("bricks2").offsetLeft;
  brick3pos = document.getElementById("bricks3").offsetLeft;
  brick4pos = document.getElementById("bricks4").offsetLeft;
  personpos = document.getElementById("walk").offsetLeft;
  if(personpos>=brick1pos && personpos<=brick1pos+300){
    document.getElementById("popupfront").style.scale=1;
    objImage.classList.toggle("jump");

  }
  if(personpos>=brick2pos && personpos<=brick2pos+300){
    document.getElementById("popupback").style.scale=1;
    objImage.classList.toggle("jump");

  }
  if(personpos>=brick3pos && personpos<=brick3pos+300){
    document.getElementById("popupvideo").style.scale=1;
    objImage.classList.toggle("jump");

  }
  if(personpos>=brick4pos && personpos<=brick4pos+300){
    document.getElementById("popupdesign").style.scale=1;
    objImage.classList.toggle("jump");

  }



}

window.onload = init;
