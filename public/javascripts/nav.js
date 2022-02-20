//funkcja anonimowa
const navSlide = ()=> {
    const extra = document.querySelector('.extra');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    extra.addEventListener('click', ()=>{
        //wysuwajace menu
        nav.classList.toggle('nav-active');
        //pojedyncze elementy
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ' ';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
        });
        //extra animation
        extra.classList.toggle('toggle');
    });
}

//wywołujemy f-cje
navSlide();