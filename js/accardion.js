const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        if (content) {
            content.classList.toggle('hidden');
            content.classList.toggle('block');
        }

        button.classList.toggle('bg-red-500'); 
        button.classList.toggle('text-white'); 
    });
});
