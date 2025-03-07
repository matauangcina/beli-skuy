<script setup>
    import Carousel from '@/components/gallery/carousel/Carousel.vue';
    import Catalog from '@/components/gallery/catalog/CatalogGrid.vue';
    import ProductOverview from '@/components/gallery/ProductOverview.vue';

    import { defineProps } from 'vue';

    defineProps({
        promos: {
            type: Array,
            default: []
        },
        catalog: {
            type: Object,
            default: {}
        },
        products: {
            type: Object,
            default: {}
        },
        center: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <Carousel
        :center="center" 
        :items="promos"/>
    <Catalog
        :center="center"
        :items="catalog" />
    <ProductOverview
        :center="center"
        :items="products" />
</template>