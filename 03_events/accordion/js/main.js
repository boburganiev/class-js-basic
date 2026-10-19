console.log(`success!`);

const accordionBtn = document.getElementById('accordion-btn');
const accordionContent = document.getElementById('accordion-content');
const icon = document.querySelector('.icon');


accordionBtn.addEventListener('click', () => {
    accordionContent.classList.toggle('is-open');
    icon.classList.toggle('is-open');
    accordionBtn.classList.toggle('is-open');
});
