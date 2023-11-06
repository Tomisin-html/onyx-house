const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});




ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 3000,
    delay: 0
});
ScrollReveal().reveal('.top-head, .start-pic-text, .about-pic-text', { origin: 'top' });
ScrollReveal().reveal('.container, .image-start, .bottom-call-pic, .review', { origin: 'bottom' });
ScrollReveal().reveal('.about-image-text, .bottom-call-text, .partnership-form', { origin: 'left' });
ScrollReveal().reveal('.about-box, .partnership-img', { origin: 'right' });


    /*typed js*/

const typed = new Typed('.heading-text', {
    strings: ['here is what customers say about us'],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 700,
    loop: false
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbxcxMEJlYbheeLq09aZZUVmrrP50YD4w_GYInjd5nKKYzqMXQ6Wm0l0yl_KYyFDtCf8Cw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Request Sent Successfully"
        setTimeout(function (){msg.innerHTML = ""},5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})