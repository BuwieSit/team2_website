document.addEventListener('DOMContentLoaded', function () {
    
    
});


function closeAllPopups() {
    document.querySelectorAll('.openPopUp').forEach(popup => {
        popup.classList.remove('openPopUp');
    });
}



  // CONTACT US POPUP//
  function openContactusPopup() {
    closeAllPopups();
    const popup = document.getElementById('popup4');
    popup.classList.add('openPopUp');
}

function closeContactPopup() {
    const popup = document.getElementById('popup4');
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
        Swal.fire({
            title: 'Please fill out all fields.',
            text: 'All fields are required to create an account.',
            icon: 'warning',
            iconColor: '#e74c3c',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Store the user's credentials in localStorage (simple front-end approach)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    Swal.fire({
        title: 'Account created successfully!',
        text: 'You can now log in with your credentials.',
        icon: 'success',
        confirmButtonText: 'Close'
    }).then((result) => {
        if (result.isConfirmed) {
            closeSignPopup();  // Close the sign-up popup
            openLoginPopup(); // Open the login popup
        }
    });

}
// Log In Function
function LoggedIn() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve stored user credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        Swal.fire({
            title: 'Logged in successfully!',
            text: 'You are now logged in.',
            icon: 'success',
            confirmButtonText: 'Close'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the survey system page
                window.location.href = 'SurveySystem.html';
            }
        });
        closeLoginPopup();
    } else {
    // Show an error message if credentials are incorrect
        Swal.fire({
            title: 'Invalid username or password',
            text: 'Please check your credentials and try again.',
            icon: 'warning',
            iconColor: '#e74c3c',
            confirmButtonText: 'Try Again'
        });
    }
}

//para hindi tumalon Daku Island //
    const allSliders = document.querySelectorAll
    ('.slider-daku, .slider-naked, .slider-hagukan, .slider-taktak, .slider-guyam, .slider-Sugba, .slider-Alegria, .slider-General, .slider-Magpupungko, .slider-Palm');
  
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
  
  
function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }

// Function to show login/signin alert when clicking submit button

  const isSignedIn = false; 

  const submitButtons = document.querySelectorAll('.submit-btn');

  submitButtons.forEach(button => 
    button.addEventListener('click', function(event) {
      if (!isSignedIn) {
        event.preventDefault();
      
      Swal.fire({
        title: 'Please sign in first!',
        text: 'You need to sign in to submit your review.',
        icon: 'warning',
        confirmButtonText: 'Close',
        background: '#f9f9f9',
        iconColor: '#e74c3c',
        confirmButtonColor: '#3498db'
        }).then((result) => {
    if (result.isConfirmed) {
        openSignPopup(); 
        
    }
});
} 
}));

// Function to show login alert when changing nationality
function checkIfSignedIn(event) {
    if (!isSignedIn) {
      event.preventDefault();
      
      Swal.fire({
        title: 'Please log in first!',
        text: 'You need to log in to change your nationality.',
        icon: 'warning',
        confirmButtonText: 'Close',
        background: '#f9f9f9',
        iconColor: '#e74c3c',
        confirmButtonColor: '#3498db'
      }).then((result) => {
        if (result.isConfirmed) {
          openSignPopup();
        }
      });
    }
  }
  document.getElementById('Nationality').addEventListener('change', checkIfSignedIn);


// Function to show Phone number alert//
  function showPhoneAlert() {
    event.preventDefault();

    Swal.fire({
      title: 'Contact Us via Phone',
      text: 'We are available to assist you! Please give us a call.',
      text: ' +63 123 456 7890',
      icon: 'info',
      iconColor: '#3BB44B',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#96ceb4',
    });
  }




  
  