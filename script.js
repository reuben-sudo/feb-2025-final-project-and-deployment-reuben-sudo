// script.js

// Home Page: Fade-in for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = 0;
    window.addEventListener('load', () => {
        hero.style.transition = 'opacity 1s ease-in-out';
        hero.style.opacity = 1;
    });
}

// About Page: Expanding Experience/Education Sections
const expandableSections = document.querySelectorAll('.experience li, .education li');
expandableSections.forEach(item => {
    const details = item.innerHTML;
    const titleAndDates = details.split(' - ')[0]; // Adjust if your formatting is different
    item.innerHTML = `<span>${titleAndDates}</span><button class="expand-button">+</button><div class="details">${details}</div>`;
    const expandButton = item.querySelector('.expand-button');
    const detailsDiv = item.querySelector('.details');
    if (expandButton && detailsDiv) {
        detailsDiv.style.display = 'none'; // Hide details initially
        expandButton.addEventListener('click', () => {
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
            expandButton.textContent = expandButton.textContent === '+' ? '-' : '+';
        });
    }
});

// Projects Page: Hover Effect on Project Cards
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-3px)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
});

// Contact Page: Basic Form Validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            isValid = false;
        }
        if (!emailInput.value.trim()) {
            alert('Please enter your email address.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        if (!messageInput.value.trim()) {
            alert('Please enter your message.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if not valid
        }
    });
}