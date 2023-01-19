//defaut color
let selectedColor = 'blue';
let painting = document.querySelector('.painting');
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor;
    console.log('paint');
})

//color options
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

blue.addEventListener('click', function(e){
    console.log('color_blue');
    selectedColor = 'blue'
})
purple.addEventListener('click', function(e){
    console.log('color_purple');
    selectedColor = 'purple'
})
red.addEventListener('click', function(e){
    console.log('color_red');
    selectedColor = 'red'
})
yellow.addEventListener('click', function(e){
    console.log('color_yellow');
    selectedColor = 'yellow'
})
green.addEventListener('click', function(e){
    console.log('color_green');
    selectedColor = 'green'
})

//eraser
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'
    console.log('erase');
})

//wipe canvas
let clearButton = document.getElementById('clear');
const pixels = document.querySelector('.painting').querySelectorAll('.pixel');

function clearCanvas(){
    for (let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = null;  
        console.log('canvas cleared'); 
    }
}
clearButton.addEventListener('click', function(){
        clearCanvas();
})
