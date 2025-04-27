function leftLink() {
    window.location.href = "market_vendor/landingPage.html";
}
function rightLink() {
    window.location.href = "local_tourism/web2_tourism.html";
}

const body = document.getElementById('bodyId');
const inactive = document.getElementById('inactive-tab');

  body.addEventListener('mouseleave', () => {
    setTimeout(function() {inactive.style.opacity = '1'}, 1500);
     
  });

  body.addEventListener('mouseenter', () => {
    clearTimeout();
    inactive.style.opacity = '0';  
  });







