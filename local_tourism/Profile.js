document.getElementById('logoutBtn').addEventListener('click', function () {
    localStorage.clear(); // Clear stored data on logout
    window.location.href = 'SurveySystem.html'; // Redirect to SurveySystem.html after logout
});

// For demonstration, this is where you would fetch user details dynamically (from localStorage or an API)
document.getElementById('username').textContent = localStorage.getItem('username') || 'Guest';
document.getElementById('email').textContent = 'Email: ' + (localStorage.getItem('email') || 'Not Available');