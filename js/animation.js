const CONTAINER = document.querySelector("#container");

const init = function() {
    const TINY = document.querySelectorAll(".tiny");
    for(let i = 0; i<3; i++) {
        CONTAINER.innerHTML += '<div class="circle"></div>';
    }
    const CIRCLES = document.querySelectorAll(".circle");
    console.log(CIRCLES.length);
    for(let i = 0; i<CIRCLES.length; i++) {
        for(let j = 0; j<4; j++){
        CIRCLES[i].innerHTML += '<div class="medium"></div>'
        }
    }
    const MEDIUM = document.querySelectorAll(".medium");
    for(let i = 0; i<MEDIUM.length; i++) {
        for(let j = 0; j<4; j++){
        MEDIUM[i].innerHTML += '<div class="tiny"></div>'
        }
    }
}

init();