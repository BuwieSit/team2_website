
const header = document.querySelector('.head');

const headChildren = header.children;

window.addEventListener('scroll', function() {

    if (window.scrollY > 50) {
   
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});
const vendorList = document.querySelector(".vendorList-cont");
