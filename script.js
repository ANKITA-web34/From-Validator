const form = document.getElementById('form');
const passwordEl = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const heading = document.querySelector('h1');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
   
    if(!isValid) {
        message.textContent = 'Please fill out all fields!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    //If password match!
    if(passwordEl.value === passwordEl2.value) {
        passwordMatch = true;
        passwordEl.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passwordEl.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        heading.style.color = 'red';
        return;
    }

    //success message!
    if(isValid && passwordMatch) {
        message.textContent = 'Registered successfully';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        heading.style.color = 'green';
    } 
}

function storeFormDate() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        Website: form.Website.value,
        password: form.password.value,
    };
}

function processFormData(e) {
    e.preventDefault();
    //valiadte Form
    validateForm();
    //submit data if valid!
    if(isValid && passwordMatch) {
        storeFormDate();
    }
}

form.addEventListener('submit', processFormData);