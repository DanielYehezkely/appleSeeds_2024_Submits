const ERROR_MESSAGE = 'Please enter a target score between 50 and 999.'

export class ErrorMessage {
    constructor() {
        this.errorElement = document.getElementById('error-message');
    }

    showError(message = ERROR_MESSAGE) {
        this.errorElement.textContent = message;
        this.errorElement.classList.remove('invisible')

        setTimeout(() => {
            this.errorElement.classList.add('invisible');
        }, 3000); 
    }
}
