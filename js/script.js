window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-flutuante');
    } else {
        navbar.classList.remove('navbar-flutuante');
    }
});
