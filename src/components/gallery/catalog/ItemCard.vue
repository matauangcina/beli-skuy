<script setup>
    import { defineProps, computed, Transition } from 'vue';

    let props = defineProps({
        image: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        width: {
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
    });
</script>

<template>
    <Transition :name="transition">
        <div
            :style="`width: ${width}px;`" 
            class="cursor-pointer bg-white rounded-sm shadow-[0px_1px_4px_1px_rgba(0,0,0,0.25)] p-2 hover:scale-102">
            <img :src="image">
            <p class="text-center font-bold uppercase">
                {{ label }}
            </p>
        </div>
    </Transition>
</template>

<style scoped>
    
</style>