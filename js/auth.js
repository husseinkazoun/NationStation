// Authentication and user management functionality

// Simulated user database for demo purposes
const demoUsers = [
    { email: 'admin@example.com', role: 'admin' },
    { email: 'donor@example.com', role: 'donor' },
    { email: 'team@example.com', role: 'team' }
];

// Check if user is logged in
function checkAuth() {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        // User is logged in
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('user-email').textContent = userEmail;
        return true;
    } else {
        // User is not logged in
        document.getElementById('login-overlay').style.display = 'flex';
        return false;
    }
}

// Initialize authentication
document.addEventListener('DOMContentLoaded', function() {
    // Set up login button
    document.getElementById('login-button').addEventListener('click', function() {
        const emailInput = document.getElementById('login-email');
        const email = emailInput.value.trim();
        
        if (email && validateEmail(email)) {
            // In a real application, this would verify the user against a database
            // For demo purposes, we'll accept any valid email
            localStorage.setItem('userEmail', email);
            checkAuth();
        } else {
            alert('Please enter a valid email address');
        }
    });
    
    // Set up logout button
    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('userEmail');
        checkAuth();
    });
    
    // Check authentication status on page load
    checkAuth();
    
    // Allow pressing Enter to login
    document.getElementById('login-email').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('login-button').click();
        }
    });
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Admin functionality (simulated)
function addUser(email) {
    // In a real application, this would add a user to the database
    // For demo purposes, we'll just log it
    console.log(`Admin added user: ${email}`);
    return true;
}

// Check if current user is admin (simulated)
function isAdmin() {
    const userEmail = localStorage.getItem('userEmail');
    return userEmail === 'admin@example.com';
}
