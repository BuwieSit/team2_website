document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('input[name="experience"]');
    const popup = document.getElementById('popup');
    const popupHeading = popup.querySelector('h2');
    const popupMessage = popup.querySelector('p');

    stars.forEach(star => {
        star.addEventListener('change', function () {
                if (star.value === '4stars' || star.value === '5stars') {
                    popupMessage.textContent = "We are looking forward to your next visit!";
                    openPopup();
                }
                else {
                    popupMessage.textContent = "We will continue to improve our services.";
                    openPopup();
            }
            popup.classList.add('openPopUp');
            
        });
    });
});

function closeAllPopups() {
    document.querySelectorAll('.openPopUp').forEach(popup => {
        popup.classList.remove('openPopUp');
    });
}

document.querySelectorAll('.rating input').forEach(function(star) {
    star.addEventListener('change', function() {
        document.getElementById('popup').classList.add('openPopUp');
    });
});

function closePopUp() {
    document.getElementById('ratingPopUp').classList.remove('openPopUp');
}


//POP UP NG FEEDBACK//
function closeFeedbackPopup() {
    const popup = document.querySelector('.popUp');
    popup.classList.remove('openPopUp');
}

function closePopup() {
    const popup = document.querySelector('.popUp');
    popup.classList.remove('openPopUp');
}

//POP UP NG LOG IN//
function closeLoginPopup() {
    const popup = document.getElementById('popup1');
    popup.classList.remove('openPopUp');
}
function openLoginPopup() {
    closeAllPopups();
    const popup = document.getElementById('popup1');
    popup.classList.add('openPopUp');
}
/////////

//POP UP NG SIGN UP//
function closeSignPopup() {
    const popup = document.getElementById('popup2');
    popup.classList.remove('openPopUp');
}
function openSignPopup() {
    closeAllPopups();
    const popup = document.getElementById('popup2');
    popup.classList.add('openPopUp');
}///////

function openAboutusPopup() {
    closeAllPopups();
    const popup = document.getElementById('popup3');
    popup.classList.add('openPopUp');
}

function closeAboutPopup() {
    const popup = document.getElementById('popup3');
    popup.classList.remove('openPopUp');
}

//STARS SA CSS CAROUSEL//
const dakuImages = document.querySelector('.daku-images');
document.querySelectorAll('.slider-nav a').forEach(dot => {
  dot.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetImg = document.getElementById(targetId);
    dakuImages.scrollTo({ left: targetImg.offsetLeft, behavior: 'smooth' });
  });
});
//CSS CAROUSEL


/*daku popup

function openDakuPopup() {
    const dakuPopup = document.getElementById('popup-daku');
    popup.classList.add('openPopUp');
}

function closeDakuPopup() {

    closeAllPopups();
    const dakuPopup = document.getElementById('popup-daku');
    popup.classList.add('openPopUp');
}
*/