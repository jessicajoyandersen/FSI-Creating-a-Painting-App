let selectedColor = 'blue'
const painting = document.querySelector('.painting')

const palette = document.querySelector('.palette')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'blue'
})

