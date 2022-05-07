const makeBigger = () => {
   var content = document.querySelector('.content')
   var header = document.querySelector('header')
   var fontSize_h = parseFloat(window.getComputedStyle(content,null).getPropertyValue('font-size'));
   var fontSize_w = parseFloat(window.getComputedStyle(header,null).getPropertyValue('font-size'));
   header.style.fontSize = (fontSize_w + 4) + "px";
   content.style.fontSize = (fontSize_h + 4) + "px";
};

const makeSmaller = () => {
   var content = document.querySelector('.content')
   var header = document.querySelector('header')
   var fontSize_h = parseFloat(window.getComputedStyle(content,null).getPropertyValue('font-size'));
   var fontSize_w = parseFloat(window.getComputedStyle(header,null).getPropertyValue('font-size'));
   header.style.fontSize = (fontSize_w - 4) + "px";
   content.style.fontSize = (fontSize_h - 4) + "px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
