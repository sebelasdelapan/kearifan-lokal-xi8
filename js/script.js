// tombol aktif
const navbarNav = document.querySelector ('.navbar-nav');
// pas di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik luar sidebar untuk menghilangkan navigasi
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});