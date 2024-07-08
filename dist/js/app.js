document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

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

        // agg al body

        const body = document.querySelector('body')
        body.appendChild(modal)
    }
}


 function cerrarmodal(){
    const modal = document.querySelector('.modal')
    modal?.remove()
 }
// function cerrarmodal(i){
//     if(i.target.classList.contains('modal')){
//         i.target.remove()
//     }
// }