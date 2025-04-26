
const header = document.querySelector('.head');
const navOptions = document.querySelectorAll('.nav-options');
const linkOpt = document.querySelectorAll('.nav-options a');

window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {
        header.classList.add('scrolling');
    } else {
    
        header.classList.remove('scrolling');
    }
});

navOptions.forEach(opt => {
    opt.addEventListener('click', () => {

        navOptions.forEach(o => o.style.boxShadow = 'none');

        // Then, highlight the clicked one
        opt.style.boxShadow = '0px 5px 10px black';
    });
});


const formInputs = document.querySelectorAll(".vendor-form input");



const vendorList = document.querySelector(".vendorList-cont");

