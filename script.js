// script.js

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a function for interactivity
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Event listener for a button to toggle menu
const menuButton = document.getElementById('menu-button');
if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
}