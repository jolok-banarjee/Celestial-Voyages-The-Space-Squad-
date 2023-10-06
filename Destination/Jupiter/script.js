// Add interactivity to show/hide sections
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});
