burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')
burger.addEventListener('click', () => {
    navlist.classList.toggle('v-nav');
    rightnav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})