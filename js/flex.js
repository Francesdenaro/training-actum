const TOGGLE = document.querySelector('#toggle');
const TEXT = document.querySelector('#text');

TOGGLE.addEventListener('click' , function() {
    TEXT.classList.toggle('hide');
});