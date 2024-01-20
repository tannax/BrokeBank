(function () {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        // Redirect to the logged-in page if already logged in
        window.location.href = "indexlogged.html";
    }

    const form = document.getElementById('accountForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('passw').value;

        // Fetch the list of registered users from local storage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        // Check if the entered credentials match any registered user
        const matchedUser = registeredUsers.find(user => user.username === enteredUsername && user.password === enteredPassword);

        if (matchedUser) {
            alert('Login successful!');
            
            // Set a flag to indicate that the user is logged in
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect to the logged-in page
            window.location.href = "indexlogged.html";
        } else {
            alert('Invalid credentials. Try again.');
        }
    });
})();