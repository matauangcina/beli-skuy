<script setup>
    import { defineProps } from 'vue';

    defineProps({
        total: {
            type: Number,
            default: 0
        },
        slide: {
            type: Number,
            default: 0
        }
    });
</script>

<template>
    <div 
        class="absolute space-x-2 left-1/2 -translate-x-1/2 bottom-5 z-2">
        <button
            v-for="i in total"
            :key="i"
            :class="[
                slide + 1 == i ? 'bg-beige': 'bg-transparent',
                'border-2', 
                'border-beige', 
                'p-1', 
                'rounded-full',
                'cursor-pointer'
            ]"
            @click="$emit('switch', i)">
        </button>
    </div>
</template>