<script setup>
    import { defineProps } from 'vue';

    defineProps({
        items: {
            type: Object,
            default: {}
        },
        center: {
            type: String,
            default: []
        }
    });
</script>

<template>
    <section :class="`${center} grid grid-cols-2 gap-3 pb-10`">
        <div
            v-for="(item, key) in items"
            :key="key"
            class="relative rounded-sm cursor-pointer hover:opacity-80">
            <a href="">
                <img :src="item">
                <p class="absolute left-1/2 -translate-x-1/2 w-9/10 bottom-5 bg-beige text-center uppercase font-bold text-3xl tracking-wider py-1 opacity-80">
                    {{ key }}
                </p>
            </a>
        </div>
    </section>
</template>