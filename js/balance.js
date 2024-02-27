let saldo = 0; // Initial balance

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var authenticated = true; // For demonstration purposes

    if (authenticated) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('bankingSystem').style.display = 'block';
        document.getElementById('welcomeMessage').innerText = 'Welcome, ' + username + '!';
        fetchBalance(); // Fetch balance when logged in
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

document.getElementById('logout').addEventListener('click', function () {
    document.getElementById('loginForm').reset();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('bankingSystem').style.display = 'none';
});

document.getElementById('bankForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var operation = document.getElementById('operation').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (operation === 'deposit') {
        realizarDeposito(amount);
    } else if (operation === 'withdraw') {
        realizarSaque(amount);
    }
    updateBalance(); // Update balance after transaction
});

function realizarDeposito(valor) {
    if (valor > 0) {
        saldo += valor;
        console.log('Deposit:', valor);
        console.log('New balance:', saldo);
    }
}

function realizarSaque(valor) {
    if (saldo >= valor) {
        saldo -= valor;
        console.log('Withdraw:', valor);
        console.log('New balance:', saldo);
    } else {
        console.log('Insufficient balance');
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = '$' + saldo.toFixed(2);
}

function loadBalance() {
    fetchBalanceLocally(); // Load balance locally
}

function fetchBalanceLocally() {
    // Simulate loading balance locally
    saldo = Math.random() * 10000; // Set a random balance
    updateBalance();
    }