document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('.menu-toggler');
    const topNav = document.querySelector('.top-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggler.addEventListener('click', e => {
        e.preventDefault();
        menuToggler.classList.toggle('open');
        topNav.classList.toggle('open');
    });

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', e => {
            e.preventDefault();
            let link = e.target.href;
            let finalLink = link.slice(32);
            document.querySelector(`${finalLink}`).scrollIntoView({
                behavior: 'smooth'
            });

            menuToggler.classList.remove('open');
            topNav.classList.remove('open');
        })
    });

    document.getElementById('up').addEventListener('click', () => {
        document
            .querySelector('header')
            .scrollIntoView({
                behavior: 'smooth'
            });
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
})