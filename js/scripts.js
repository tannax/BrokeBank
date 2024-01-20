async function loadBalance() {
    try {
        // Creates a random balance with dollars and cents between 1000.00 and 5000.99
        const dollars = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        const cents = Math.floor(Math.random() * 100);

        // Format balance with the $ sign and two decimal places
        const formattedBalance = `$${dollars}.${cents.toString().padStart(2, '0')}`;

        // Set the formatted balance directly or replace the fetch logic if not needed
        const balanceElement = document.getElementById('balance');
        balanceElement.textContent = formattedBalance;
    } catch (error) {
        console.error('Error loading balance:', error);
    }
}

//CreateAccount
function redirectToCreateAccount() {
    window.location.href = "./createaccount.html";
}

//Login
function redirectToLogInAccount() {
    window.location.href = "./login.html";
}

