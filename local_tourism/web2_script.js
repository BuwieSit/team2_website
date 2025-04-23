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
    const popup = document.getElementById('popup1');
    popup.classList.add('openPopUp');
}
/////////

//POP UP NG SIGN UP//
function closeSignPopup() {
    const popup = document.getElementById('popup1');
    popup.classList.remove('openPopUp');
}
function openLoginPopup() {
    const popup = document.getElementById('popup1');
    popup.classList.add('openPopUp');
}///////


