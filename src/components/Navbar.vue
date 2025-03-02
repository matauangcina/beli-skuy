<script setup>
    import logo from '@/assets/gallery/logo.svg';
    import cart from '@/assets/gallery/cart.svg';
    import cartSolid from '@/assets/gallery/cart-solid.svg';
    import chat from '@/assets/gallery/chat-bubble.svg';
    import chatSolid from '@/assets/gallery/cart-solid.svg';

    const changeIcon = () => {
        console.log('test');
    };
</script>

<template>
    <nav class="bg-white text-black px-15 py-5 flex justify-between border-b border-gray-300">
        <div class="flex justify-between w-sm">
            <a href="#">
                <img class="w-35" :src="logo" alt="logo" />
            </a>
            <div class="flex w-30 justify-between items-center">
                <a href="#">
                    <img :src="cart" @mouseover="changeIcon" class="nav-icon" alt="cart-icon">
                </a>
                <a href="#">
                    <img :src="chat" class="nav-icon" alt="chat-icon">
                </a>
            </div>
        </div>
        <div class="w-full flex justify-end items-center font-semibold">
            <a class="py-1 mr-15 border-b-3 text-center text-xl" href="#">Gallery</a>
            <a class="py-1 mr-15 hover:border-b-3 text-center text-xl" href="#">Register</a>
            <a class="py-1 hover:border-b-3 text-center text-xl" href="#">Profile</a>
        </div>
    </nav>
</template>