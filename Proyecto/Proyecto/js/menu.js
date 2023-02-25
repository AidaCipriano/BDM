let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
});