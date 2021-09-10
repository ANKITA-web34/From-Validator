const form = document.getElementById('form');
const passwordEl = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    isValid = form.checkValidity();
    message.textContent = 'Please fill out all fields!';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    //valiadte Form
    validateForm();
}

form.addEventListener('submit', processFormData);