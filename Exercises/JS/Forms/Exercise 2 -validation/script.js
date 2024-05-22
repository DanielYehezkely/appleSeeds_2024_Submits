document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    function showError(input, message) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = message;
        input.classList.add('error');
    }

    function clearError(input) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = '';
        input.classList.remove('error');
    }

    function validateForm(event) {
        event.preventDefault();
        let isValid = true;

        if (usernameInput.value.length < 3) {
            showError(usernameInput, 'Username must be at least 3 characters long.');
            isValid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email.');
            isValid = false;
        }
        
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    }

    form.addEventListener('submit', validateForm);

    const inputs = [usernameInput, emailInput, passwordInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
    });
});