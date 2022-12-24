$(function() 
{
    const input = $('.input label, input[type=text], input[type=email], input[type=password]');
    const field = $('.input');

    input.focus(function() {
        field.removeClass('active');
        $(this).parent().removeClass('error');
        $(this).parent().addClass('active');
        $(this).parent().find('.error-msg').removeClass('active');

        const label = $(this).parent().find('label').not('.bx');

        label.animate({
            'top': 0,
            'font-size': '15px'
        }, 200);
    })

    input.blur(function() {
        field.removeClass('active');
        
        if ( $(this).val() == "" ) {
            const label = $(this).parent().find('label').not('.bx');

            label.animate({
                'top': '20px',
                'font-size': '20px'
            }, 200);

            $(this).parent().addClass('error');
            $(this).parent().find('.error-msg').addClass('active');

            if ( $(this).parent().hasClass('username') ) {
                $(this).parent().find('.error-msg').text('Username is required!');
            } else if ( $(this).parent().hasClass('dob') ) {
                $(this).parent().find('.error-msg').text('Date of birth is required!');
            } else if ( $(this).parent().hasClass('email') ) {
                $(this).parent().find('.error-msg').text('Email is required!');
            } else if ( $(this).parent().hasClass('pass') ) {
                $(this).parent().find('.error-msg').text('Password is required!');
            } else if ( $(this).parent().hasClass('conf') ) {
                $(this).parent().find('.error-msg').text('Password confirmation is required!');
            } 

            $(this).parent().animate({
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

    const showPass = $('.bx.bxs-show');

    showPass.click(function() {
        const pass = $(this).parent().find('input');

        if ( $(this).hasClass('bxs-show') ) {
            pass.attr('type', 'text');
        } else if ( $(this).hasClass('bxs-hide') ) {
            pass.attr('type', 'password');
        }

        if ( pass.val() != "" ) {
            $(this).parent().addClass('active');
        }

        $(this).toggleClass('bxs-show');
        $(this).toggleClass('bxs-hide');
    })
})