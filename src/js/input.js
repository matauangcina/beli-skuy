$(function() 
{
    const input = $('.input label, input[type=text], input[type=email], input[type=password]');
    const field = $('.input');
    const showPass = $('.bx.bxs-show');

    input.focus(function() {
        field.removeClass('active');
        $(this).closest('.input').removeClass('error');
        $(this).closest('.input').addClass('active');
        $(this).closest('.input').find('.error-msg').removeClass('active');

        const label = $(this).closest('.input').find('label').not('.bx');

        label.animate({
            'top': 0,
            'font-size': '15px'
        }, 200);
    })

    input.blur(function() {
        field.removeClass('active');
        
        if ( $(this).val() == "" ) {
            const label = $(this).closest('.input').find('label').not('.bx');

            label.animate({
                'top': '20px',
                'font-size': '20px'
            }, 200);

            $(this).closest('.input').addClass('error');
            $(this).closest('.input').find('.error-msg').addClass('active');

            if ( $(this).closest('.input').hasClass('username') ) {
                $(this).closest('.input').find('.error-msg').text('Username is required!');
            } else if ( $(this).closest('.input').hasClass('dob') ) {
                $(this).closest('.input').find('.error-msg').text('Date of birth is required!');
            } else if ( $(this).closest('.input').hasClass('email') ) {
                $(this).closest('.input').find('.error-msg').text('Email is required!');
            } else if ( $(this).closest('.input').hasClass('pass') ) {
                $(this).closest('.input').find('.error-msg').text('Password is required!');
            } else if ( $(this).closest('.input').hasClass('conf') ) {
                $(this).closest('.input').find('.error-msg').text('Password confirmation is required!');
            } 

            $(this).closest('.input').animate({
                'position': 'absolute',
                'left': '4px'
            }, 50).animate({
                'position': 'absolute',
                'left': '-4px'
            }, 50).animate({
                'position': 'absolute',
                'left': '4px'
            }, 50).animate({
                'position': 'absolute',
                'left': '-4px'
            }, 50).animate({
                'position': 'absolute',
                'left': '0'
            }, 50)
        }
    })

    showPass.click(function() {
        const pass = $(this).closest('.input').find('input');

        if ( $(this).hasClass('bxs-show') ) {
            pass.attr('type', 'text');
        } else if ( $(this).hasClass('bxs-hide') ) {
            pass.attr('type', 'password');
        }

        $(this).toggleClass('bxs-show');
        $(this).toggleClass('bxs-hide');
    })
})