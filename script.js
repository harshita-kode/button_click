const button = document.querySelector(".button");

button.addEventListener('mouseenter', ()=>{

    const top = Math.floor(Math.random()*87)+1;
    const left = Math.floor(Math.random()*83)+1;

    button.style.top = `${top}vh`;
    button.style.left = `${left}vw`;
});
