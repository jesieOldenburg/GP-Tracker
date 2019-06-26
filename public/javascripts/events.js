console.log('events.js is here');

let emailInput = document.getElementById('login-email-input');
emailInput.addEventListener('keyup', (e) => {
    fieldVal = e.target.value;
    console.log("TCL: fieldVal", fieldVal)
})

let passwordInput = document.getElementById('login-password-input');
passwordInput.addEventListener('keyup', (e) => {
    userPass = e.target.value;
    console.log("TCL: userPass", userPass)
})