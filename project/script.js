// JavaScript for hamburger menu toggle functionality

// Select the hamburger element and nav-links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the menu on click
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on nav-links to show/hide menu
    navLinks.classList.toggle('active');
    
    // Optional: Animate hamburger bars (e.g., to an 'X')
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked (for better UX on mobile)
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});