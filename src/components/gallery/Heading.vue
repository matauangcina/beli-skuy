<script setup>
    import Banner from '@/components/gallery/banner/Banner.vue';

    import { defineProps, onMounted, onBeforeUnmount, ref } from 'vue';

    let props = defineProps({
        banners: {
            type: Array,
            default: []
        }
    });

    let interval = null;
    let len = props.banners.length;

    let activeList = ref(new Array(len).fill(false));
    activeList.value[0] = true;

    onMounted(() => {
        let count = 1;
        interval = setInterval(() => {
            activeList.value[count] = true;
            if (count != 0) {
                activeList.value[count-1] = false;
            } else {
                activeList.value[len-1] = false;
            }
            count++;
            if (count == len) {
                count = 0;
            }
        }, 5000);
    });

    onBeforeUnmount(() => {
        clearInterval(interval);
    })
</script>

<template>
    <header
        :class="[
            'px-15', 
            'py-10', 
            'bg-black', 
            'text-white', 
            'italic', 
            'text-xl', 
            'tracking-wider'
        ]">
        <p class="font-bold">
            BeliSkuy
        </p>
        <Banner
            v-for="(banner, index) in banners"
            :key="index"
            :banner="banner"
            :active="activeList[index]" />
    </header>
</template>