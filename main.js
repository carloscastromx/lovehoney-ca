const cr1 = document.querySelector('.cr1')
const seleccion = document.querySelectorAll('.seleccion')

seleccion.forEach(seleccion => {
    seleccion.addEventListener('click', function(){
        const activo = document.querySelector('.activo')
        seleccion.classList.add('activo')
        activo.classList.remove('activo')
        cr1.src = seleccion.src 
    })
})

const cr2 = document.querySelector('.cr2')
const selectcr2 = document.querySelectorAll('.seleccion')

seleccion.forEach(seleccion => {
    selectcr2.addEventListener('click', function(){
        const activocr2 = document.querySelector('.activo')
        seleccion.classList.add('activo')
        activo.classList.remove('activo')
        cr2.src = seleccion.src 
    })
})