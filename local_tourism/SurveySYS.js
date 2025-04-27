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


document.querySelector('.profile-tab').addEventListener('click', function(event) {
    event.stopPropagation();
    
    const dropdown = this.querySelector('.dropdown');
    
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.profile-tab .dropdown');
    if (!event.target.closest('.profile-tab')) {
        dropdown.style.display = 'none';
    }
});

document.getElementById('submit-comment').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment-textarea').value;
    const rating = document.querySelector('input[name="experience"]:checked');

    if (username && commentText && rating) {
        const starRating = rating.value;  
        const stars = Array.from(document.querySelectorAll('.rating label'));
        
        const newComment = document.createElement('div');
        newComment.classList.add('user-comment');
        newComment.innerHTML = `
            <p><strong>${username}</strong> rated this ${starRating}</p>
            <p>${commentText}</p>
        `;

        const commentsSection = document.getElementById('comments-section');
        commentsSection.appendChild(newComment);

        document.getElementById('username').value = '';
        document.getElementById('comment-textarea').value = '';
        document.querySelector('input[name="experience"]:checked').checked = false;

        let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        storedComments.push({ username, starRating, commentText });
        localStorage.setItem('comments', JSON.stringify(storedComments));
    } else {
        alert('Please fill in all fields: Name, Comment, and Rating');
    }
});

window.addEventListener('load', function() {
    let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsSection = document.getElementById('comments-section');
    
    storedComments.forEach(function(comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('user-comment');
        newComment.innerHTML = `
            <p><strong>${comment.username}</strong> rated this ${comment.starRating}</p>
            <p>${comment.commentText}</p>
        `;
        commentsSection.appendChild(newComment);
    });
});
document.addEventListener('DOMContentLoaded', function () {
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
  });

  
 // Function to handle comment submission for any card
function handleCommentSubmit(event) {
    const card = event.target.closest('.card-Daku');  // Get the card where the submit button is clicked
    const username = 'Current User'; // You can replace this with dynamic username logic
    const commentText = card.querySelector('.comment-textarea').value;
    const rating = card.querySelector('input[name^="experience"]:checked'); // This selects the radio button for rating
    const visitDate = card.querySelector('.visit-date').value;

    if (commentText && rating && visitDate) {
        const starRating = rating.value;

        // Create a new comment element
        const newComment = document.createElement('div');
        newComment.classList.add('user-comment');
        newComment.innerHTML = `
            <p><strong>${username}</strong> rated this ${starRating}</p>
            <p><em>Visited on: ${visitDate}</em></p>
            <p>${commentText}</p>
        `;

        const commentsSection = card.querySelector('.comments-section');
        commentsSection.appendChild(newComment);

        // Clear the fields after submitting
        card.querySelector('.comment-textarea').value = '';
        card.querySelector('.visit-date').value = '';
        card.querySelector('input[name^="experience"]:checked').checked = false;

        // Save to localStorage
        let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        storedComments.push({ username, starRating, visitDate, commentText });
        localStorage.setItem('comments', JSON.stringify(storedComments));
    } else {
        alert('Please fill in all fields: Date of Visit, Rating, and Comment');
    }
}

// Attach the event listener to each submit button in all cards
document.querySelectorAll('.submit-comment').forEach(button => {
    button.addEventListener('click', handleCommentSubmit);
});

// Function to load comments from localStorage when the page loads
window.addEventListener('load', function () {
    let storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Loop through all cards and load the comments for each
    document.querySelectorAll('.card-Daku').forEach(card => {
        const commentsSection = card.querySelector('.comments-section');
        storedComments.forEach(function (comment) {
            const newComment = document.createElement('div');
            newComment.classList.add('user-comment');
            newComment.innerHTML = `
                <p><strong>${comment.username}</strong> rated this ${comment.starRating}</p>
                <p><em>Visited on: ${comment.visitDate}</em></p>
                <p>${comment.commentText}</p>
            `;
            commentsSection.appendChild(newComment);
        });
    });
});

