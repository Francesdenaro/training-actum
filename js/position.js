const BUTTON = document.querySelector('button');
const IMGS = document.querySelectorAll('img');

BUTTON.addEventListener('click', function() {
    for(let i = 0; i<IMGS.length; i++) {
        IMGS[i].classList.toggle('big-img');
    }
    if(BUTTON.innerHTML==='big images') {
        BUTTON.innerHTML = 'small images';
        console.log('clicked')
    } else {
        BUTTON.innerHTML = 'big images';
    }
});