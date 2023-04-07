devfront = document.getElementById("popupfront1");
devback = document.getElementById("popupback1");
devui = document.getElementById("popupdesign1");
devvd = document.getElementById("popupvideo1");

function func1(){
    devfront.style.scale = 1;
    document.getElementById("close").style.scale=1;

}

function func2(){
    devback.style.scale = 1;
    document.getElementById("close").style.scale=1;

}

function func3(){
    devvd.style.scale = 1;
    document.getElementById("close").style.scale=1;

}

function func4(){
    devui.style.scale = 1;
    document.getElementById("close").style.scale=1;

}
document.addEventListener("click", (e) => {
    if (e.target.id == "popupfrontimg1") {
      document
        .getElementById("popupfront")
        .addEventListener("click", function closepop() {
          document.getElementById("popupfront").style.scale = 1;
          document.getElementById("close").style.scale=1;

  
          document.getElementById("popupback").style.scale = 0;
  
          document.getElementById("popupvideo").style.scale = 0;
  
          document.getElementById("popupdesign").style.scale = 0;
          check = 1;
        });
    } 
    else if (e.target.id == "htmllogo") {
        document
          .getElementById("popupfront")
          .addEventListener("click", function closepop() {
            document.getElementById("popupfront").style.scale = 1;
            document.getElementById("close").style.scale=1;


    
            document.getElementById("popupback").style.scale = 0;
    
            document.getElementById("popupvideo").style.scale = 0;
    
            document.getElementById("popupdesign").style.scale = 0;
            check = 1;
          });
      }
      else if (e.target.id == "pythonlogo") {
        document
          .getElementById("popupfront")
          .addEventListener("click", function closepop() {
            document.getElementById("popupfront").style.scale = 0;
    
            document.getElementById("popupback1").style.scale = 1;
            document.getElementById("close").style.scale=1;

    
            document.getElementById("popupvideo1").style.scale = 0;
    
            document.getElementById("popupdesign1").style.scale = 0;
            check = 1;
          });
      }
      else if (e.target.id == "blenderlogo") {
        document
          .getElementById("popupfront")
          .addEventListener("click", function closepop() {
            document.getElementById("popupfront").style.scale = 0;
    
            document.getElementById("popupback1").style.scale = 0;
    
            document.getElementById("popupvideo1").style.scale = 1;
            document.getElementById("close").style.scale=1;

    
            document.getElementById("popupdesign1").style.scale = 0;
            check = 1;
          });
      }
      else if (e.target.id == "figmalogo") {
        document
          .getElementById("popupfront")
          .addEventListener("click", function closepop() {
            document.getElementById("popupfront").style.scale = 0;
    
            document.getElementById("popupback1").style.scale = 0;
    
            document.getElementById("popupvideo1").style.scale = 0;
    
            document.getElementById("popupdesign1").style.scale = 1;
            document.getElementById("close").style.scale=1;

            check = 1;
          });
      }else if (e.target.id == "popupbackimg1") {
      document
        .getElementById("popupback")
        .addEventListener("click", function closepop() {
          document.getElementById("popupfront").style.scale = 0;
  
          document.getElementById("popupback1").style.scale = 1;
          document.getElementById("close").style.scale=1;

  
          document.getElementById("popupvideo").style.scale = 0;
  
          document.getElementById("popupdesign").style.scale = 0;
          check = 1;
        });
    } else if (e.target.id == "popupvideoimg1") {
      document
        .getElementById("popupvideo")
        .addEventListener("click", function closepop() {
          document.getElementById("popupfront").style.scale = 0;
  
          document.getElementById("popupback").style.scale = 0;
  
          document.getElementById("popupvideo").style.scale = 1;
          document.getElementById("close").style.scale=1;

  
          document.getElementById("popupdesign").style.scale = 0;
          check = 1;
        });
    } else if (e.target.id == "popupdesignimg") {
      document
        .getElementById("popupdesign1")
        .addEventListener("click", function closepop() {
          document.getElementById("popupfront").style.scale = 0;
  
          document.getElementById("popupback").style.scale = 0;
  
          document.getElementById("popupvideo").style.scale = 0;
  
          document.getElementById("popupdesign").style.scale = 1;
          document.getElementById("close").style.scale=1;

          check = 1;
        });
    } else {
      document.getElementById("popupfront1").style.scale = 0;
  
      document.getElementById("popupback1").style.scale = 0;
  
      document.getElementById("popupvideo1").style.scale = 0;
  
      document.getElementById("popupdesign1").style.scale = 0;
      document.getElementById("close").style.scale=0;

      check = 0;
    }
  });