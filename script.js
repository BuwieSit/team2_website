function leftLink() {
    window.location.href = "market_vendor/landingPage.html";
}
function rightLink() {
    window.location.href = "local_tourism/web2_tourism.html";
}

const body = document.getElementById('bodyId');
const inactive = document.getElementById('inactive-tab');

  body.addEventListener('mouseleave', () => {
    inactive.style.opacity = '1';
     
  });

  body.addEventListener('mouseenter', () => {

    inactive.style.opacity = '0';  
  });







