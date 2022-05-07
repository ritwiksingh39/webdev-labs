/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (number) => {
   
   if (number === 0){
      document.querySelector('body').className = 'default'
   }
   if (number === 1){
      document.querySelector('body').className = 'desert'
   }
   if (number === 2){
      document.querySelector('body').className = 'ocean'
   }
   if (number === 3){
      document.querySelector('body').className = 'high-contrast'
   }
};


document.querySelector('#default').addEventListener('click',() => changeTheme(0));
document.querySelector('#desert').addEventListener('click', () => changeTheme(1));
document.querySelector('#ocean').addEventListener('click', () => changeTheme(2));
document.querySelector('#high-contrast').addEventListener('click',() =>  changeTheme(3));