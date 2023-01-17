let selectedColor = 'blue';
const painting = document.querySelector('.painting');
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor;
    console.log('paint');
})

const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

blue.addEventListener('click', function(e){
    console.log('color_blue');
    selectedColor = 'blue'
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