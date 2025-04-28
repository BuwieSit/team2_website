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
                alert('Please fill in all fields: Date of Visit, Rating, and Comment');
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
