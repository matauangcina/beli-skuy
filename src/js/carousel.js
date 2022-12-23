$(function()
{
    const carousel = () => {
        const slider = $('#slides');
        const activeSlide = $('#slides .slider.active');

        const slideWidth = activeSlide.width();
 
        const next = activeSlide.next();

        if ( next.length ) {
            slider.animate({
                'margin-left': '-=' + slideWidth
            }, 800)
        } else {
            slider.animate({
                'margin-left': '0'
            }, 800)
        }
    }

    const changeSlide = (e) => {
        const firstNav = $('#slide-nav .navigate:first-child');
        const firstSlide = $('#slides .slider:first-child');

        const curr = $('#slide-nav .navigate.active');
        const next = curr.next();

        const nextSlide = e.next();

        e.removeClass('active');
        curr.removeClass('active');

        if ( nextSlide.length ) {
            next.addClass('active');
            nextSlide.addClass('active');
        } else {
            firstSlide.addClass('active');
            firstNav.addClass('active');
        }
    }

    const slideshow = () => {
        const slides = $('#slides .slider.active');

        carousel();
        changeSlide(slides);
    }

    setInterval(slideshow, 5000);
});