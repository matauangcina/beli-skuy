$(function() {
    const menu = $('#menu');
    const overlay = $('#overlay');

    menu.click(function() {
        $(this).toggleClass('bx-menu');
        $(this).toggleClass('bx-x');

        $(this).parent().find('nav').toggleClass('active');
        overlay.toggleClass('active');
    })

    overlay.click(function() {
        $(this).removeClass('active');

        menu.toggleClass('bx-menu');
        menu.toggleClass('bx-x');

        menu.parent().find('nav').toggleClass('active');
    })
})