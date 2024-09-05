
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function subscribe() {
    const emailInput = document.getElementById('email').value;
    const message = document.getElementById('message');
    const error = document.getElementById('error');

    if (validateEmail(emailInput)) {
        // Valid email, show success message
        message.style.display = 'block';
        error.style.display = 'none';
        message.innerHTML = `Thank you for subscribing, ${emailInput}!`;
    } else {
        //Invalid email, show error message
        error.style.display = 'block';
        message.style.display = 'none';
        error.innerHTML = 'Please enter a valid email address.';
    }
}
