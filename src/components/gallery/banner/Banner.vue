<script setup>
    import { defineProps, Transition } from 'vue';

    defineProps({
        banner: {
            type: String,
            default: 'Looking fashionable has never been easier.'
        },
        active: {
            type: Boolean,
            default: true
        }
    });
</script>

<template>
    <div :class="[active ? 'block' : 'hidden']">
        <Transition name="slide-fade">
            <p v-if="active">
                {{ banner }}
            </p>
        </Transition>
    </div>
</template>

<style scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 1s ease-in-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }
</style>