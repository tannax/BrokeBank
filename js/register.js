
(function () {
    const form = document.getElementById('accountForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('passw').value;

        // Check if the user is already registered
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const isUserRegistered = existingUsers.some(user => user.username === enteredUsername);

        if (isUserRegistered) {
            alert('Username already exists. Please choose a different one.');
        } else {
            // Register the new user
            const newUser = { username: enteredUsername, password: enteredPassword };
            existingUsers.push(newUser);

            // Save the updated user list to local storage
            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            alert('Registration successful! You can now log in.');
            // Check the current page and redirect accordingly
            const currentPage = window.location.pathname;
            if (currentPage.includes('register')) {
            } else {
                // Redirect to a default page after registration
                window.location.href = "./login.html";
            }
        }
    });
})();