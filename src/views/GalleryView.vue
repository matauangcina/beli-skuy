<script setup>
    import Heading from '@/components/gallery/Heading.vue';
    import Content from '@/components/gallery/Content.vue';

    import {bannerList, promoList, catalogList, productList} from '@/config/resource';

    import { ref } from 'vue';

    const banners = ref(bannerList);
    const promos = ref(promoList);
    const catalog = ref(catalogList);
    const products = ref(productList);

    const center = 'px-130';
</script>

<template>
    <Heading
        :banners="banners" />
    <Content
        :promos="promos"
        :catalog="catalog"
        :products="products"
        :center="center" />
</template>