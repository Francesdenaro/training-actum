const ELEMENTS = document.querySelectorAll('#wrapper *');
const BUTTON = document.querySelector('button'); 
let j = 0;

const init = function() {
    for (let i = 0; i< ELEMENTS.length; i++) {
        ELEMENTS[i].classList.toggle('hide');
    }
};


BUTTON.addEventListener('click', function() {
    if(this.innerHTML==='show elements'){
        this.innerHTML = 'show next element'; 
    } 
    else if (j === ELEMENTS.length) {
        this.classList.toggle('hide');
    }
    ELEMENTS[j].classList.toggle('hide');
    j++;
    // window.scrollTo(ELEMENTS[j].scrollTop);
});

init();