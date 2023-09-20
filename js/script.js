

const test  = document.querySelector('.test');
const point = document.querySelector('#point');


test.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Event Object: ", e);
});

const object =document.querySelector('#object');

