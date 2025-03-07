<script setup>
    import logo from '@/assets/global/logo.svg';
    import cart from '@/assets/global/cart.svg';
    import cartSolid from '@/assets/global/cart-solid.svg';
    import chat from '@/assets/global/chat.svg';
    import chatSolid from '@/assets/global/chat-solid.svg';

    import { ref } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    const cartIcon = ref(cart);
    const chatIcon = ref(chat);

    const changeIcon = (type) => {
        let icon = cartSolid;
        if (type == 'chat') {
            icon = chatSolid;
        }
        return icon;
    }

    const toggleIcon = (type, active) => {
        if (type == 'cart') {
            if (cartIcon.value == cartSolid && !active) {
                cartIcon.value = cart;
            } else {
                cartIcon.value = cartSolid;
            }
        } else {
            if (chatIcon.value == chatSolid && !active) {
                chatIcon.value = chat;
            } else {
                chatIcon.value = chatSolid;
            }
        }
    };

    const isActive = (path) => {
        const route = useRoute();
        return route.path == path;
    };
</script>

<template>
    <nav 
        class="bg-white text-black px-15 py-3 flex justify-between border-b border-gray-300">
        <div class="flex justify-between w-sm">
            <RouterLink to="/">
                <img 
                    class="w-30" 
                    :src="logo" 
                    alt="logo" />
            </RouterLink>
            <div class="flex w-30 justify-around items-center">
                <RouterLink to="/cart">
                    <img 
                        :src="isActive('/cart') ? changeIcon('cart') : cartIcon"
                        class="w-8"
                        @mouseenter="toggleIcon('cart')" 
                        @mouseleave="toggleIcon('cart')" 
                        alt="cart-icon" />
                </RouterLink>
                <RouterLink to="/chat">
                    <img 
                        :src="isActive('/chat') ? changeIcon('chat') : chatIcon"
                        class="w-8"
                        @mouseenter="toggleIcon('chat')" 
                        @mouseleave="toggleIcon('chat')" 
                        alt="chat-icon" />
                </RouterLink>
            </div>
        </div>
        <div class="w-full flex justify-end items-center font-semibold text-center text-md">
            <RouterLink
                :class="[isActive('/') ? 'border-b-3': '', 'py-1', 'mr-10', 'hover:border-b-3']"
                to="/">
                Gallery
            </RouterLink>
            <RouterLink
                :class="[isActive('/register') ? 'border-b-3': '', 'py-1', 'mr-10', 'hover:border-b-3']"
                to="/register">
                Register
            </RouterLink>
            <RouterLink
                :class="[isActive('/profile') ? 'border-b-3': '', 'py-1', 'hover:border-b-3']"
                to="/profile">
                Profile
            </RouterLink>
        </div>
    </nav>
</template>