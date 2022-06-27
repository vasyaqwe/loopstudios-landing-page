const nav = document.querySelector('.nav--primary');
const navToggle = document.querySelector('.nav-toggle');
const logo = document.querySelector('.logo');


navToggle.addEventListener('click', () => {
    const attribute = nav.getAttribute('data-visible');
    if (attribute === 'false') {
        nav.setAttribute('data-visible', true);
        if (nav.style.transform === 'translate(-100%, 100%)') {
            nav.style.transform = 'translate(100%, -100%)';
            nav.style.transition = 'none';
            setTimeout(() => {
                nav.style.transform = 'translate(0)';
                nav.style.transition = 'all 0.4s ease';
                navToggle.setAttribute('aria-expanded', true);
                navToggle.firstChild.src = '/icon-close.672c8e2b.svg';

                logo.setAttribute('data-visible', false);
            }, 100);
        } else {
            navToggle.setAttribute('aria-expanded', true);
            logo.setAttribute('data-visible', false);
            navToggle.firstChild.src = '/icon-close.672c8e2b.svg';
        }
    } else {
        nav.setAttribute('data-visible', false);
        nav.style.transform = 'translate(-100%, 100%)';
        navToggle.setAttribute('aria-expanded', false);
        logo.setAttribute('data-visible', true);
        navToggle.firstChild.src = '/icon-hamburger.4d46a600.svg';
    }
});