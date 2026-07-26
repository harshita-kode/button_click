const button = document.querySelector(".button");
const rect = button.getBoundingClientRect();

const maxX = window.innerWidth - rect.width;
const maxY = window.innerHeight - rect.height;

button.addEventListener('mouseenter', ()=>{

    const top = Math.floor(Math.random()*maxY)+1;
    const left = Math.floor(Math.random()*maxX)+1;

    button.style.top = `${top}px`;
    button.style.left = `${left}px`;
});
