const hamburger = document.querySelector('.hamburger');
const headerMenu  = document.querySelector('.header-menu');

const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    headerMenu.classList.toggle('header-menu--active')
};

hamburger.addEventListener('click', handleClick);