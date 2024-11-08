const form = document.getElementById('signinForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();
    
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Basic password length check (for example, at least 8 characters)
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // If all validations pass, submit the form
    form.submit();
});
