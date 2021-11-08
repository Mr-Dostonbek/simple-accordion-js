const toggle = document.querySelectorAll('.accordion-toggle');

toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle("active");
    });
});