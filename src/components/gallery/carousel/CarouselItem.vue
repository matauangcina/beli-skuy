<script setup>
    import { defineProps, computed, Transition } from 'vue';

    let props = defineProps({
        item: {
            type: String,
            default: 'none'
        },
        slide: {
            type: Number,
            default: 0
        },
        idx: {
            type: Number,
            default: 0
        },
        direction: {
            type: String,
            default: 'right'
        }
    });

    const transition = computed(() => {
        return props.direction == 'right' ? 'slide-in' : 'slide-out';
    })
</script>

<template>
    <div class="absolute top-0 left-0 right-0 bottom-0">
        <Transition :name="transition">
            <img 
                :src="item" 
                v-if="slide === idx" />
        </Transition>
    </div>
</template>

<style scoped>
    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active {
        transition: all 1s ease-in-out;
    }

    .slide-in-enter-from {
        transform: translateX(100%);
    }

    .slide-in-leave-to {
        transform: translateX(-100%);
    }

    .slide-out-enter-from {
        transform: translateX(-100%);
    }

    .slide-out-leave-to {
        transform: translateX(100%);
    }
</style>