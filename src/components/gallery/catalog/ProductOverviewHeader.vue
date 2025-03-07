<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            default: 'Latest Products'
        },
        href: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <div class="flex justify-between items-end font-bold mb-5">
        <h1 class="text-3xl uppercase tracking-wider">
            {{ title }}
        </h1>
        <a 
            :href="href"
            class="underline hover:text-beige text-base">
            View More
        </a>
    </div>
</template>