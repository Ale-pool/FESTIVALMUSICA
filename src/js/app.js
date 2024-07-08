document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
})

function navegacionFija(){
    
}

function crearGaleria(){
    const cantimagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i=1; i<= cantimagenes; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'imagen galeria'
        galeria.appendChild(imagen)

        // event handler -- es un evento que se ejecuta cuando se carga la imagen

        imagen.onclick = function(){
            mostrarImagen(i)
        }

    }

    function mostrarImagen(i){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'imagen galeria'
        // generar modal)
        const modal = document.createElement('DIV')
        modal.classList.add('modal')
        modal.onclick = cerrarmodal
        modal.appendChild(imagen)

        //Boton- salir de la imagen
        const botonCerrar = document.createElement('BUTTON')
        botonCerrar.textContent = 'X'
        botonCerrar.classList.add('btn-cerrar')
        botonCerrar.onclick = cerrarmodal
        
        modal.appendChild(botonCerrar)


        // agg al body

        const body = document.querySelector('body')
        body.classList.add('overflow-hidden')
        body.appendChild(modal)
    }
}


 function cerrarmodal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-Out')
    setTimeout(() => {
        modal.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
    
 }




// function cerrarmodal(i){
//     if(i.target.classList.contains('modal')){
//         i.target.remove()
//     }
// }