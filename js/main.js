let menuBtn= document.querySelector('.menu-btn');
let asideMenu =document.querySelector('.navBar__aside-menu');
let closeBtn =document.querySelector('.close-icon');


menuBtn.addEventListener('click' ,()=>{
    if (asideMenu.classList.contains('close')) {
        asideMenu.classList.remove('close')
    } 
    asideMenu.classList.add( 'open');
})
closeBtn.addEventListener('click' , ()=>{
    asideMenu.classList.add('close')
})
