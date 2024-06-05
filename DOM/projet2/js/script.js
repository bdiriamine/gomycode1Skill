document.addEventListener('DOMContentLoaded', function() {
  const colorBox = document.getElementById('color-box');
  const btnChangeColor = document.getElementById('change-color-btn');

  function getRandomColor() {
     const codeHex='0123456789ABCDEF' ;
     let codeColor ='#'
     for(let i = 0; i <6 ; i++){
      codeColor+=codeHex[Math.floor(Math.random() * 16)]
     }
     return codeColor
  }

  btnChangeColor.addEventListener('click', function() {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
  });
});