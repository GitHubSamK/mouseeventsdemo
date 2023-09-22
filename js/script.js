




const test  = document.querySelector('.test');
const point = document.querySelector('#point');


test.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Event Object: ", e);
});

const myButton = document.getElementById('myButton');


myButton.addEventListener('click', moveblock);

function moveblock() {
    const box = document.querySelector('.box');
    box.classList.toggle('move');


    
}

const secondButton = document.getElementById('secondButton');

secondButton.addEventListener('click', dance);

function dance() {
    const anim = document.querySelector('.anim');
    anim.classList.toggle('wiggle');
}
