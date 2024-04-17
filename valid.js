const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const validateInputs = () => {
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();

    if(usernameValue === '') {
        setError(username, 'username is required');
    }else{
        setSuccess(username);
    }

    
    if(emailValue === '') {
        setError(email, 'Email is required');
    }else if (!isvalidEmail(emailValue)) {

    }else{
        setSuccess(email);
    }
    
    if(passwordValue === '') {
        setError(password, 'password is required');
    }else if (passwordValue.length < 8) {
        
        setError(password, 'password must be at least 8 characters');
    }else{
        setSuccess(password);
    }
    
    if(password2Value === '') {
        setError(password2, 'password is required');
    }else if(password2Value !== passwordValue) {
        setError(password2, "password doesn't match");
    } else{
        setSuccess(password2); 
    }
};