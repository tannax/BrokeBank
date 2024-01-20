const loggedInKey = 'isLoggedIn';

document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem(loggedInKey);

    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        window.location.href = "./login.html";
    }
});

function logout() {
    // Clear the flag indicating the user is logged in
    localStorage.removeItem(loggedInKey);
    
    // Redirect to the login page after logout
    window.location.href = "./index.html";
}