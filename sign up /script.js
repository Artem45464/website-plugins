const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.getElementById('passwordError');

// Initially hide the error message
passwordError.style.display = 'none';

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault(); // Prevent form submission
        passwordError.style.display = 'block'; // Show error
    } else {
        passwordError.style.display = 'none'; // Hide error if passwords match
    }
});

confirmPassword.addEventListener('keyup', function() {
    if (password.value !== confirmPassword.value) {
        passwordError.style.display = 'block'; // Show error if they don't match
    } else {
        passwordError.style.display = 'none'; // Hide error if they match
    }
});
