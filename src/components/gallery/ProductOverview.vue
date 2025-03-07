<script setup>
    import ItemCard from '@/components/gallery/catalog/ItemCard.vue';
    import ProductOverviewHeader from '@/components/gallery/catalog/ProductOverviewHeader.vue';

    import { useTemplateRef, defineProps, onMounted, ref } from 'vue';

    defineProps({
        items: {
            type: Object,
            default: {}
        },
        center: {
            type: String,
            default: ''
        }
    });

    let container = useTemplateRef('container');
    let width = ref(0);
    let direction = 'right';

    onMounted(() => {
        const containerWidth = Math.floor(container.value.offsetWidth / 4);
        width.value = containerWidth - 8;
    });
</script>

<template>
    <section
        :class="`${center} pb-10`">
        <ProductOverviewHeader
            :title="'Latest Products'"
            :href="''"
        />
        <div ref="container" class="overflow-x-hidden">
            <div
                class="w-fit flex gap-2 px-1 py-2">
                <ItemCard 
                    v-for="(item, index) in items"
                    :key="index"
                    :label="item.name"
                    :category="item.category"
                    :image="item.image"
                    :width="width"
                    :direction="direction"
                />
            </div>
        </div>
    </section>
</template>