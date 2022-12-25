const submitForm = document.getElementById('login');

submitForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    let isValid = 1;
    
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
    
    if ( isValid )
        window.location.replace('./gallery.html');
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