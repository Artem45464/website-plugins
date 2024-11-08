const form = document.getElementById('signinForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.createElement('div');
const passwordError = document.createElement('div');

// Insert error message divs in the DOM
email.after(emailError);
password.after(passwordError);

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Clear previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
        return;
    }

    // Basic password length check
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        passwordError.style.color = "red";
        return;
    }

    // If all validations pass, submit the form
    form.submit();
});
