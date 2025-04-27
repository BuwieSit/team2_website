document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('input[name=".rating input"]');
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
// Sign Up Function
function SignedUp() {
    const username = document.getElementById('SignUname').value;
    const email = document.getElementById('Signemail').value;
    const password = document.getElementById('Signpass').value;

    // Check if fields are filled
    if (!username || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Store the user's credentials in localStorage (simple front-end approach)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Account created successfully!");

    // Close the sign-up popup
    closeSignPopup();
}
// Log In Function
function LoggedIn() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve stored user credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if entered credentials match the stored ones
    if (username === storedUsername && password === storedPassword) {
        alert("Logged in successfully!");
        closeLoginPopup();
        
        // Redirect to SurveySystem.html after successful login
        window.location.href = 'SurveySystem.html';
    } else {
        alert("Invalid username or password.");
    }
}

//para hindi tumalon Daku Island //

  
  document.addEventListener('DOMContentLoaded', function () {
    const allSliders = document.querySelectorAll
    ('.slider-daku, .slider-naked, .slider-hagukan, .slider-taktak, .slider-guyam, .slider-Sugba, .slider-Alegria, .slider-General, .slider-Magpupungko');
  
    allSliders.forEach(slider => {
      slider.querySelectorAll('a').forEach(dot => {
        dot.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetImg = document.getElementById(targetId);
          const dakuImages = this.closest('.card-Daku').querySelector('.daku-images');
          dakuImages.scrollTo({ left: targetImg.offsetLeft, behavior: 'smooth' });
        });
      });
    });
  });
  






  
  