//menu
const botonCerrar=document.getElementById('button-cerrar');
const botonHamburg = document.getElementById('btn-hamburg');
botonHamburg.addEventListener('click', function(){
    let menu = document.getElementById('nav-header');
    menu.classList.toggle('mostrar-menu');
})
botonCerrar.addEventListener('click', function(){
    let menu = document.getElementById('nav-header');
    if(menu.matches('.mostrar-menu')){
        menu.classList.remove('mostrar-menu');
    }
})

// header (scroll)

window.addEventListener('scroll', function(){
    const header=document.getElementById('header');
    header.classList.toggle('header-cambio',window.scrollY>10);
})



window.addEventListener('scroll', function(){
    const seccionNosotras=document.getElementById('seccion-nosotras');
    let scroll=document.documentElement.scrollTop;
    seccionNosotras.classList.toggle('mostrar-seccion-nosotras',scroll>400)
})


window.addEventListener('scroll', function(){
    const seccionMenu=document.getElementById('seccion-menu');
    let scroll=document.documentElement.scrollTop;
    seccionMenu.classList.toggle('mostrar-seccion-menu',scroll>400)
})




//modal
const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const esVisible = "es-visible";

for (const el of openEls) {
    el.addEventListener('click', function(){
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(esVisible);
    });
}

for (const el of closeEls) {
    el.addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.classList.remove(esVisible);
    });
}

//carrousel
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});