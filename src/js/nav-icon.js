$(function() 
{
    const cart = $('#cart');
    const chat = $('#chat');

    if ( !cart.hasClass('active') ) {
        cart.mouseenter(function() {
            cart.attr('src', '../../assets/gallery/cart-solid.svg');
        })
        cart.mouseleave(function() {
            cart.attr('src', '../../assets/gallery/shopping-cart.svg');
        })
    }

    if ( !chat.hasClass('active') ) {
        chat.mouseenter(function() {
            chat.attr('src', '../../assets/gallery/chat-solid.svg');
        })
        chat.mouseleave(function() {
            chat.attr('src', '../../assets/gallery/chat-bubble.svg');
        })
    }
})