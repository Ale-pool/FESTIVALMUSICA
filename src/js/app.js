document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')   
        }
    })
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

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navlinks = document.querySelectorAll('.navegacion-principal a')
        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= sectionTop - sectionHeight/3){
                actual = section.id
            }
        })
        
       navlinks.forEach(link =>{
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
       });

})
}

function scrollNav(){
    const links = document.querySelectorAll('.navegacion-principal a')
    links.forEach(link =>{
        link.addEventListener('click', function(e){
            e.preventDefault()
            const sectionscroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionscroll)
            section.scrollIntoView({behavior: 'smooth'})
        })
    })

}




    // const links = document.querySelectorAll('.navegacion-principal a')
    // links.forEach(link =>{
    //     link.addEventListener('click', function(e){ // e es el evento, cuando se precciona el link
    //         e.preventDefault()
    //         const sectionscroll = e.target.getAttribute('href')
    //         const section = document.querySelector(sectionscroll)  // evita que se ejecute el evento por defecto
    //         // const seccion = document.querySelector(e.target.getAttribute('href'))
    //         section.scrollIntoView({
    //             behavior: 'smooth'
    //         })
    //     })
    // })



// function cerrarmodal(i){
//     if(i.target.classList.contains('modal')){
//         i.target.remove()
//     }
// }