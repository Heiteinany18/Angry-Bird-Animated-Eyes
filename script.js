
function changeFace() {
    let leftInner = document.querySelector(".inner-left");
    let rightInner = document.querySelector(".inner-right");
    let eye = document.querySelector("eye");
    
    let leftEye = document.querySelector(".left-eye");
    let rightEye = document.querySelector(".right-eye");
    
    let background = document.querySelector('.background');
    let mouth = document.querySelector(".mouth");
    
  
    if (leftInner == leftInner || rightInner == rightInner) {
        leftInner.style.background="red";
        leftEye.style.boxShadow="inset 0px -8px 5px red";
        leftEye.style.background="transparent"
        
        rightInner.style.background="red";
        rightEye.style.boxShadow="inset 0px -8px 5px red";
        rightEye.style.background="transparent";
        
        background.style.display="flex";
        mouth.style.boxShadow="inset 3px 20px 5px red";
    }
   
    
}