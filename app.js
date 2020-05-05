const submit = document.querySelector('form');
const submitReg = document.querySelector('.regbtn');
const border = document.querySelectorAll('.border-bottom');
const textField = document.querySelectorAll('.text-field');
const placeholder = document.querySelectorAll('.placeholder');
const eye = document.querySelector('.fa-eye');
const password = document.querySelector('.password');
const check = document.querySelector('.check');
const reg = document.querySelector('.reg');
const log = document.querySelector('.log');
const main = document.querySelector('#main');
const register = document.querySelector('#register');

const icon = document.querySelectorAll('.icon');
let iconCount = 0;

submit.addEventListener('submit', (e) => {
  e.preventDefault();

for (let i=0;i<2; i++) {
    if (!textField[i].value) icon[i].classList.add('error');
  }
}, true)

submitReg.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i=2;i<textField.length; i++) {
    if (!textField[i].value) icon[i].classList.add('error');
  }
}, true)

for(let i=0; i<textField.length; i++) {
    textField[i].addEventListener('focus', event => {
        border[i].style.width = '100%';
        placeholder[i].classList.add('active');
        let icon = document.querySelectorAll('.icon');
        icon[i].classList.remove('error');
    })

    textField[i].addEventListener('focusout', event => {
        if (textField[i].value == '') {
            placeholder[i].classList.remove('active');
            border[i].style.width = '0';
        }
    })
}

check.addEventListener('click', e => {
    const icon = document.querySelector('.check-icon')
    const attr = icon.getAttribute('class');
    const status = attr == 'far fa-circle check-icon' ? 'fas fa-check-circle check-icon' : 'far fa-circle check-icon';
    icon.setAttribute("class", status);
});

eye.addEventListener('click', e => {
    const attr = password.getAttribute('type');
    const status = attr == 'password' ? 'text' : 'password';
    password.setAttribute("type", status);
});

var tw = {
    /* [THE SETTINGS] */
    container: "#twrapIn", // ID of typewriter container
    text: [ // Blocks of text to show
      "This is where it all begins.",
      "Are you ready for your journey?",
      "You have waited your whole life.",
      "Just to take this leap of faith.",
      "Take it."
    ], 
    delay: 100, // Delay in between each character
    blockDelay: 2500, // Delay in between each block of text
  
    /* [THE MECHANICS] */
    timer: null, // Used to hold the timer
    pointer: 0, // Current text position
    block: 0, // Current block of text
    draw : function () {
    // tw.draw() : typewriter effect
  
      // Draw next character
      tw.pointer++;
      tw.container.innerHTML = tw.text[tw.block].substring(0, tw.pointer);
      if (tw.pointer < tw.text[tw.block].length) {
        tw.timer = setTimeout(tw.draw, tw.delay);
      }
  
      // End of block - Draw next block or cycle back to first?
      else {
        tw.block++;
        if (tw.text[tw.block] == undefined) { tw.block = 0; }
        tw.timer = setTimeout(tw.reset, tw.blockDelay);
      }
    },
  
    reset : function () {
    // tw.reset : Onto the next block of text
  
      tw.pointer = 0;
      tw.container.innerHTML = "";
      tw.timer = setTimeout(tw.draw, tw.delay);
    }
  };
  
window.addEventListener("load", function(){
    tw.container = document.querySelector(tw.container);
    tw.draw();
});

reg.addEventListener('click', function() {
    main.style="opacity:0; z-index:0; margin-top: -100px";
    register.style="opacity:1; z-index:1;margin-top: 0";
});
log.addEventListener('click', function() {
    main.style="opacity:1; z-index:1; margin-top: 0";
    register.style="opacity:0; z-index:0; margin-top: -100px";
});