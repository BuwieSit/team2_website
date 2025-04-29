const input = document.querySelector('input');
const titles = document.querySelectorAll('h3');

input.addEventListener('keyup', e => {
    titles.forEach(title => {
        if (title.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            title.parentNode.parentNode.style.display = 'block';
        } else {
            title.parentNode.parentNode.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.submit-btn').forEach(button => {
        button.addEventListener('click', function () {
            const target = button.getAttribute('data-target'); 
            const card = button.closest('.card-Daku');

            const username = 'Current User'; 
            const commentText = document.getElementById(`comment-textarea-${target}`).value;
            const visitDate = document.getElementById(`visit-date-${target}`).value;
            const rating = card.querySelector(`input[name="experience-${target}"]:checked`);

            if (commentText && rating && visitDate) {
                const starRating = rating.value;

                const newComment = document.createElement('div');
                newComment.classList.add('user-comment');
                newComment.innerHTML = ` 
                    <p><strong>${username}</strong> rated this ${starRating}</p>
                    <p><em>Visited on: ${visitDate}</em></p>
                    <p>${commentText}</p>
                `;

                const commentsSection = document.getElementById(`comments-section-${target}`);
                commentsSection.appendChild(newComment);

                document.getElementById(`comment-textarea-${target}`).value = '';
                document.getElementById(`visit-date-${target}`).value = '';
                if (rating) rating.checked = false;

                let allComments = JSON.parse(localStorage.getItem('comments')) || {};
                if (!allComments[target]) allComments[target] = [];
                allComments[target].push({ username, starRating, visitDate, commentText });
                localStorage.setItem('comments', JSON.stringify(allComments));
            } else {
                Swal.fire({
                    title: 'Incomplete Submission',
                    text: 'Please fill in all fields: Date of Visit, Rating, and Comment.',
                    icon: 'warning',
                    iconColor: '#e74c3c',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#96ceb4',
                });
            }
        });
    });

    const allComments = JSON.parse(localStorage.getItem('comments')) || {};

    Object.keys(allComments).forEach(target => {
        const commentsSection = document.getElementById(`comments-section-${target}`);
        if (commentsSection) {
            allComments[target].forEach(comment => {
                const newComment = document.createElement('div');
                newComment.classList.add('user-comment');
                newComment.innerHTML = `
                    <p><strong>${comment.username}</strong> rated this ${comment.starRating}</p>
                    <p><em>Visited on: ${comment.visitDate}</em></p>
                    <p>${comment.commentText}</p>
                `;
                commentsSection.appendChild(newComment);
            });
        }
    });
});


function closeAllPopups() {
    document.querySelectorAll('.openPopUp').forEach(popup => {
        popup.classList.remove('openPopUp');
    });
}

function openContactusPopup() {
    closeAllPopups();
    const popup = document.getElementById('popup4');
    popup.classList.add('openPopUp');
}

function closeContactPopup() {
    const popup = document.getElementById('popup4');
    popup.classList.remove('openPopUp');
}

function showPhoneAlert(event) {
    event.preventDefault();

    Swal.fire({
      title: 'Contact Us via Phone',
      html: 'We are available to assist you!<br><strong>+63 123 456 7890</strong>',
      icon: 'info',
      iconColor: '#3BB44B',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#96ceb4',
    });
}

//para hindi tumalon tumalon yung iba//
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
