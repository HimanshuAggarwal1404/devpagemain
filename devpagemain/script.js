var objImage;
var iconpop1;
var iconpop2;
var iconpop3;
var iconpop4;
var check = 0; //box-close:0    box-open:1
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
document.onkeydown = getKeyAndMove;
document.getElementById("static").classList.toggle("walkhidden");
document.getElementById("walk2").classList.toggle("walkhidden");
function exitpopup() {
  document.getElementById("popupfront").style.scale = 0;

  document.getElementById("popupback").style.scale = 0;

  document.getElementById("popupvideo").style.scale = 0;

  document.getElementById("popupdesign").style.scale = 0;
  check = 0;
}
document.addEventListener("click", (f) => {
  console.log(f.target.id);
  var personpos = document.getElementById("walk").offsetLeft;
  var brick1pos = document.getElementById("bricks1").offsetLeft;
  var pos = parseInt(objImage.style.left);


  if (f.target.id == "htmllogo") {
    if (personpos <= brick1pos + 20) {
      check=0;

      while (pos <= brick1pos ) {
        var pos = parseInt(objImage.style.left);
        console.log("in while loop")
        
          for (var i = 0; i <= 10000; i++) {
            if (i % 2 == 0) {
              document.getElementById("walk1").classList.toggle("walkhidden");
              document.getElementById("walk2").classList.toggle("walkhidden");
              objImage.style.left = pos + 25 + "px";
            }
            if (i % 2 != 0) {
              document.getElementById("walk2").classList.toggle("walkhiiden");
              document.getElementById("walk1").classList.toggle("walkhidden");
              objImage.style.left = pos + 25 + "px";
            }
          }
        
      }
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target.id == "popupfrontimg") {
    document
      .getElementById("popupfront")
      .addEventListener("click", function closepop() {
        document.getElementById("popupfront").style.scale = 1;

        document.getElementById("popupback").style.scale = 0;

        document.getElementById("popupvideo").style.scale = 0;

        document.getElementById("popupdesign").style.scale = 0;
        check = 1;
      });
  } else if (e.target.id == "popupbackimg") {
    document
      .getElementById("popupback")
      .addEventListener("click", function closepop() {
        document.getElementById("popupfront").style.scale = 0;

        document.getElementById("popupback").style.scale = 1;

        document.getElementById("popupvideo").style.scale = 0;

        document.getElementById("popupdesign").style.scale = 0;
        check = 1;
      });
  } else if (e.target.id == "popupvideoimg") {
    document
      .getElementById("popupvideo")
      .addEventListener("click", function closepop() {
        document.getElementById("popupfront").style.scale = 0;

        document.getElementById("popupback").style.scale = 0;

        document.getElementById("popupvideo").style.scale = 1;

        document.getElementById("popupdesign").style.scale = 0;
        check = 1;
      });
  } else if (e.target.id == "popupdesignimg") {
    document
      .getElementById("popupdesign")
      .addEventListener("click", function closepop() {
        document.getElementById("popupfront").style.scale = 0;

        document.getElementById("popupback").style.scale = 0;

        document.getElementById("popupvideo").style.scale = 0;

        document.getElementById("popupdesign").style.scale = 1;
        check = 1;
      });
  } else {
    document.getElementById("popupfront").style.scale = 0;

    document.getElementById("popupback").style.scale = 0;

    document.getElementById("popupvideo").style.scale = 0;

    document.getElementById("popupdesign").style.scale = 0;
    check = 0;
  }
});

function init() {
  objImage = document.getElementById("walk");
  objImage.style.position = "absolute";
  objImage.style.left = "1vw";
  objImage.style.bottom = "11.5vh";
  iconpop1 = document.getElementById("icon1");
  iconpop2 = document.getElementById("icon2");
  iconpop3 = document.getElementById("icon3");
  iconpop4 = document.getElementById("icon4");
}
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveup();
      jumping();

      break;
    case 32: //Up arrow key
      moveup();
      jumping();

      break;
    case 27: //Up arrow key
      exitpopup();

      break;
    case 39: //right arrow key
      moveRight();

      break;
  }
}
function moveLeft() {
  if (check == 0) {
    var pos = parseInt(objImage.style.left);
    if (pos >= 20) {
      for (var i = 0; i <= 10000; i++) {
        if (i % 2 == 0) {
          document.getElementById("walk1").classList.toggle("walkhidden");
          document.getElementById("walk2").classList.toggle("walkhidden");

          objImage.style.left = pos - 35 + "px";
        }
        if (i % 2 != 0) {
          document.getElementById("walk2").classList.toggle("walkhiiden");
          document.getElementById("walk1").classList.toggle("walkhidden");

          objImage.style.left = pos - 35 + "px";
        }
      }
    }
  }
}

function moveRight() {
  if (check == 0) {
    var pos = parseInt(objImage.style.left);
    if (pos <= w - 120) {
      for (var i = 0; i <= 10000; i++) {
        if (i % 2 == 0) {
          document.getElementById("walk1").classList.toggle("walkhidden");
          document.getElementById("walk2").classList.toggle("walkhidden");
          objImage.style.left = pos + 25 + "px";
        }
        if (i % 2 != 0) {
          document.getElementById("walk2").classList.toggle("walkhiiden");
          document.getElementById("walk1").classList.toggle("walkhidden");
          objImage.style.left = pos + 25 + "px";
        }
      }
    }
  }
}
function jumping() {
  if (check == 0) {
    objImage.classList.add("jump");
  }
}
function moveup() {
  if (check == 0) {
    objImage.classList.remove("jump");
    iconpop1.classList.remove("iconjump");
    iconpop2.classList.remove("iconjump");
    iconpop3.classList.remove("iconjump");
    iconpop4.classList.remove("iconjump");
    document.getElementById("popupfront").style.scale = 0;

    document.getElementById("popupback").style.scale = 0;

    document.getElementById("popupvideo").style.scale = 0;

    document.getElementById("popupdesign").style.scale = 0;

    brick1pos = document.getElementById("bricks1").offsetLeft;
    brick2pos = document.getElementById("bricks2").offsetLeft;
    brick3pos = document.getElementById("bricks3").offsetLeft;
    brick4pos = document.getElementById("bricks4").offsetLeft;
    personpos = document.getElementById("walk").offsetLeft;
    brick1pos = document.getElementById("bricks1").offsetLeft;
    brick1width = document.getElementById("bricks1").offsetWidth;
    brick2width = document.getElementById("bricks2").offsetWidth;
    brick3width = document.getElementById("bricks3").offsetWidth;
    brick4width = document.getElementById("bricks4").offsetWidth;
    console.log(personpos);
    console.log(brick1pos);
    console.log(brick1width);

    if (personpos >= brick1pos && personpos <= brick1pos + brick1width) {
      objImage.classList.add("jump");
      document.getElementById("popupfront").style.scale = 1;
      iconpop1.classList.add("iconjump");
      check = 1;
    }
    if (personpos >= brick2pos && personpos <= brick2pos + brick2width) {
      objImage.classList.add("jump");
      document.getElementById("popupback").style.scale = 1;
      iconpop2.classList.add("iconjump");
      check = 1;
    }

    if (personpos >= brick3pos && personpos <= brick3pos + brick3width) {
      objImage.classList.add("jump");
      document.getElementById("popupvideo").style.scale = 1;
      iconpop3.classList.add("iconjump");
      check = 1;
    }
    if (personpos >= brick4pos && personpos <= brick4pos + brick4width) {
      objImage.classList.add("jump");
      document.getElementById("popupdesign").style.scale = 1;
      iconpop4.classList.add("iconjump");
      check = 1;
    }
  }
}

window.onload = init;
