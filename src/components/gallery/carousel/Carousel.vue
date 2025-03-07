<script setup>
    import Item from '@/components/gallery/carousel/CarouselItem.vue';
    import Indicator from '@/components/gallery/carousel/CarouselIndicator.vue';

    import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue';

    let props = defineProps({
        center: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: []
        }
    });

    let total = props.items.length;

    let interval = null;
    let curr = ref(0);
    let direction = 'right';

    const prev = (step = -1) => {
        const index = curr.value > 0 ? curr.value + step : total - 1;
        curr.value = index
        direction = 'left';
        startInterval();
    }

    const _next = (step = 1) => {
        const index = curr.value < total - 1 ? curr.value + step : 0;
        curr.value = index
        direction = 'right';
    }

    const next = (step) => {
        _next(step);
        startInterval();
    };

    const switchSlide = (index) => {
        const step = index - curr.value - 1;
        if (step > 0) {
            next(step);
        } else {
            prev(step);
        }
    };

    const startInterval = () => {
        stopInterval();
        interval = setInterval(() => {
            _next();
        }, 8000);
    };

    const stopInterval = () => {
        clearInterval(interval);
    };

    onMounted(() => {
        startInterval();
    });

    onBeforeUnmount(() => {
        stopInterval();
    });
</script>

<template>
    <section :class="`${center} py-5`">
        <div class="flex justify-center">
            <div class="relative overflow-hidden w-full h-100">
                <Item 
                    v-for="(item, i) in items" 
                    :key="i" 
                    :item="item"
                    :slide="curr"
                    :idx="i"
                    :direction="direction" />
                <Indicator
                    :total="total" 
                    :slide="curr"
                    @switch="switchSlide($event)" />
            </div>
        </div>
    </section>
</template>