const toggle = document.querySelector('nav .toggle .fa-bars');
const remove = document.querySelector('nav .toggle .fa-times');
const nav = document.querySelector('nav .nav_menu .nav_iteam');
toggle.addEventListener('click',function(){
   nav.style.display = 'initial';
   toggle.style.display = 'none';
   remove.style.display='initial';
})

remove.addEventListener('click',function(){
    nav.style.display = 'none';
    toggle.style.display = 'initial';
    remove.style.display='none';
 })