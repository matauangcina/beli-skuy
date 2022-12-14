const submitForm = document.getElementById('register');

submitForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('username');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const conf = document.getElementById('conf');

    let isValid = 1;

    if ( name.value.length < 5 || name.value.length > 30 ) {
        isValid = 0;
        name.closest('.input').classList.add('error');
        name.closest('.input').querySelector('.error-msg').classList.add('active');
        name.closest('.input').querySelector('.error-msg').textContent = 'Username must be at least 5 characters and at most 30 characters!';
    }

    if ( !checkDob(dob.value) ) {
        isValid = 0;
        dob.closest('.input').classList.add('error');
        dob.closest('.input').querySelector('.error-msg').classList.add('active');
        dob.closest('.input').querySelector('.error-msg').textContent = 'Must be at least 18 years old!';
    } else if ( checkDob(dob.value) == -1 ) {
        isValid = 0;
        dob.closest('.input').classList.add('error');
        dob.closest('.input').querySelector('.error-msg').classList.add('active');
        dob.closest('.input').querySelector('.error-msg').textContent = 'Invalid date of birth!';
    }
    
    if ( !checkEmail(email.value) ) {
        isValid = 0;
        email.closest('.input').classList.add('error');
        email.closest('.input').querySelector('.error-msg').classList.add('active');
        email.closest('.input').querySelector('.error-msg').textContent = 'Invalid email!';
    }

    if ( !checkPass(pass.value) ) {
        isValid = 0;
        pass.closest('.input').classList.add('error');
        pass.closest('.input').querySelector('.error-msg').classList.add('active');
        pass.closest('.input').querySelector('.error-msg').textContent = 'Password must contain uppercase letters, lowercase letters, numbers, and special characters!';
    } else if ( pass.value.length < 10 ) {
        isValid = 0;
        pass.closest('.input').classList.add('error');
        pass.closest('.input').querySelector('.error-msg').classList.add('active');
        pass.closest('.input').querySelector('.error-msg').textContent = 'Password must be at least 10 characters!';
    }

    if ( conf.value !== pass.value ) {
        isValid = 0;
        conf.closest('.input').classList.add('error');
        conf.closest('.input').querySelector('.error-msg').classList.add('active');
        conf.closest('.input').querySelector('.error-msg').textContent = 'Password did not match!';
    }
    
    if ( isValid )
        window.location.replace('./index.html');
})

const checkDob = dob => {
    const date = new Date();
    const curr = date.setFullYear(date.getFullYear());

    const year = date.getFullYear();
    const birth = new Date(dob).getFullYear();

    if ( new Date(dob) > curr ) {
        return -1;
    }
    if ( year - birth < 18 ) {
        return 0;
    }

    return 1
}

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
    let uppercase = 0
    let lowercase = 0
    let numbers = 0
    let special = 0

    for (let i = 0; i < pass.length; i++) {
        if ( pass[i] >= 'A' && pass[i] <= 'Z' ) {
            uppercase = 1;
            continue;
        }
        if ( pass[i] >= 'a' && pass[i] <= 'z' ) {
            lowercase = 1;
            continue;
        }
        if ( pass[i] >= '0' && pass[i] <= '9' ) {
            numbers = 1;
            continue;
        }
        if ( (pass[i] >= ' ' && pass[i] <= '/') || 
             (pass[i] >= ':' && pass[i] <= '@') || 
             (pass[i] >= '[' && pass[i] <= '`') ||
             (pass[i] >= '{' && pass[i] <= '~') )
        {
            special = 1;
            continue;
        }
    }

    if ( !uppercase ||
         !lowercase || 
         !numbers ||
         !special )
    {
        return 0;
    }

    return 1;
}