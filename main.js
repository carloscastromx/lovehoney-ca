var cr1 = document.querySelector('.cr1')
var seleccion1 = [...document.querySelectorAll('.s1 .seleccion')]

seleccion1.forEach(seleccion => {
    seleccion.addEventListener('click', function(){
        
        document.querySelectorAll('.activo')[0].classList.remove('activo')
        seleccion.classList.add('activo')

        cr1.setAttribute("src", seleccion.getAttribute("src"))
    })
})

var cr2 = document.querySelector('.cr2')
var seleccion2 = [...document.querySelectorAll('.s2 .seleccion')]

seleccion2.forEach(seleccion => {
    seleccion.addEventListener('click', function(){
        
        document.querySelectorAll('.activo')[1].classList.remove('activo')
        seleccion.classList.add('activo')

        cr2.setAttribute("src", seleccion.getAttribute("src"))
    })
})

var cr3 = document.querySelector('.cr3')
var seleccion3 = [...document.querySelectorAll('.s3 .seleccion')]

seleccion3.forEach(seleccion => {
    seleccion.addEventListener('click', function(){
        
        document.querySelectorAll('.activo')[2].classList.remove('activo')
        seleccion.classList.add('activo')

        cr3.setAttribute("src", seleccion.getAttribute("src"))
    })
})

var cr4 = document.querySelector('.cr4')
var seleccion4 = [...document.querySelectorAll('.s4 .seleccion')]

seleccion4.forEach(seleccion => {
    seleccion.addEventListener('click', function(){
        
        document.querySelectorAll('.activo')[3].classList.remove('activo')
        seleccion.classList.add('activo')

        cr4.setAttribute("src", seleccion.getAttribute("src"))
    })
})