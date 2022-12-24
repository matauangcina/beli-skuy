const submitForm = document.getElementById('register');

submitForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('username');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const conf = document.getElementById('conf');

    const date = new Date();
    const curr = date.setFullYear(date.getFullYear());
    const year = date.getFullYear();
    const birth = new Date(dob.value).getFullYear();

    let isValid = 1;

    if ( name.value.length < 5 || name.value.length > 30 ) {
        isValid = 0;
        name.parentNode.classList.add('error');
        name.parentNode.querySelector('.error-msg').classList.add('active');
        name.parentNode.querySelector('.error-msg').textContent = 'Username must be at least 5 characters and at most 30 characters!';
    }

    if ( year - birth < 18 ) {
        isValid = 0;
        dob.parentNode.classList.add('error');
        dob.parentNode.querySelector('.error-msg').classList.add('active');
        dob.parentNode.querySelector('.error-msg').textContent = 'Must be at least 18 years old!';
    } else if ( new Date(dob.value) > curr ) {
        isValid = 0;
        dob.parentNode.classList.add('error');
        dob.parentNode.querySelector('.error-msg').classList.add('active');
        dob.parentNode.querySelector('.error-msg').textContent = 'Invalid date of birth!';
    }
    
    if ( !checkEmail(email.value) ) {
        isValid = 0;
        email.parentNode.classList.add('error');
        email.parentNode.querySelector('.error-msg').classList.add('active');
        email.parentNode.querySelector('.error-msg').textContent = 'Invalid email!';
    }

    if ( !checkPass(pass.value) ) {
        isValid = 0;
        pass.parentNode.classList.add('error');
        pass.parentNode.querySelector('.error-msg').classList.add('active');
        pass.parentNode.querySelector('.error-msg').textContent = 'Password must contain uppercase letters, lowercase letters, numbers, and special characters!';
    } else if ( pass.value.length < 10 ) {
        isValid = 0;
        pass.parentNode.classList.add('error');
        pass.parentNode.querySelector('.error-msg').classList.add('active');
        pass.parentNode.querySelector('.error-msg').textContent = 'Password must be at least 10 characters!';
    }

    if ( conf.value !== pass.value ) {
        isValid = 0;
        conf.parentNode.classList.add('error');
        conf.parentNode.querySelector('.error-msg').classList.add('active');
        conf.parentNode.querySelector('.error-msg').textContent = 'Password did not match!';
    }
    
    if ( isValid )
        window.location.replace('./login.html');
})

const checkEmail = email => {
    const asperand = email.indexOf('@');
    const dot = email.indexOf('.');

    let flag = 1;

    if ( asperand < 1 )
        flag = 0;

    if ( dot <= asperand + 2 || dot == email.length - 1 )
        flag = 0;
    
    return flag;
}

const checkPass = pass => {
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const number = /[0-9]/g;
    const special = /[-$@#!^&*+_]/g;

    let flag = 1;

    if ( !pass.match(uppercase) || 
         !pass.match(lowercase) ||
         !pass.match(number) ||
         !pass.match(special) )
    {
        flag = 0;    
    }

    return flag;
}