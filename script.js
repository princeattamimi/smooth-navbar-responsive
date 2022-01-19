const burgerMenu = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})


const links = document.querySelectorAll('.link a');

links.forEach( link => {
    link.addEventListener('click', event => {
        const linkId = link.getAttribute('href')
        const destinationElement = document.querySelector(linkId);

        burgerMenu.click();

        if(destinationElement.classList.contains('home')){
            window.scrollTo({
                top: destinationElement.offsetTop - 70,
                behavior: 'smooth'
            })
        }else{
            window.scrollTo({
                top: destinationElement.offsetTop,
                behavior: 'smooth'
            })
        }

        event.preventDefault();
    })
})