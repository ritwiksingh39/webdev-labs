/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

var bodyElement = document.body;
var contentElement = document.querySelector(".content");
var font_size = bodyElement.style.fontSize;
var lineh = bodyElement.style.lineHeight;
var lig = bodyElement.style.ligatures;
var letter = bodyElement.style.letterSpacing;
var weight = bodyElement.style.fontWeight;
var lw = bodyElement.style.lineWidth;

var pr = contentElement.style.paddingRight; 
var pl = contentElement.style.paddingLeft;
var js = contentElement.style.justifyContent;


const changeMode = (ev) => {
  const elementClicked = ev.currentTarget;
  var bodyElement = document.body;
  var contentElement = document.querySelector(".content");
  
  if(font_size == bodyElement.style.fontSize)
  {
    bodyElement.style.fontSize = 20 + 'px'
    bodyElement.style.lineHeight = 65 + 'px'
    bodyElement.style.ligatures = 'no-common-ligatures'
    bodyElement.style.letterSpacing = 0.35 + 'ch'
    bodyElement.style.fontWeight = 'bold'
    bodyElement.style.lineWidth = 20 + 'px'
    contentElement.style.paddingRight = 300 + 'px'
    contentElement.style.paddingLeft = 200 + 'px'
    contentElement.style.justifyContent = "center"
  }
  else{
    bodyElement.style.fontSize = font_size
    bodyElement.style.lineHeight = lineh
    bodyElement.style.ligatures = lig
    bodyElement.style.letterSpacing = letter
    bodyElement.style.fontWeight = weight
    bodyElement.style.lineWidth = lw
    contentElement.style.paddingRight = pr
    contentElement.style.paddingLeft = pl
    contentElement.style.justifyContent = js
  }
  

};



document.querySelector('#dyslexia-toggle').addEventListener('click', changeMode);