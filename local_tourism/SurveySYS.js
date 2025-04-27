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
