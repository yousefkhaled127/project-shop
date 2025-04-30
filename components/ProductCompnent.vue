<template>
    <Carousel :itemsToShow="5" :wrapAround="true" :breakpoints="breakpoints">
        <Slide v-for="(product, index) in products" :key="index">
            <nuxt-link :to="`/products/${product.id}`">
                <div class="carousel-box">
                    <img class="img-carousel" :src="product.image" :alt="product.name" />
                    <h6 class="mt-2">{{ product.title }}</h6>

                    <div class="d-flex gap-2 align-items-center mt-2">
                        <p class="d-flex gap-1">
                            <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                            <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                            <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                            <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                            <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                        </p>
                        <p v-if="product.rating">{{ product.rating.rate }}/5</p>
                    </div>
                    <h5 class="mt-1">$240</h5>
                </div>
            </nuxt-link>
        </Slide>
    </Carousel>
</template>

<script setup>
const { useFetchAPI, $fetchAPI, loading } = useAPI();
const { data, error } = await useFetchAPI('products');
const products = ref([])
products.value = data.value
console.log(data.value)
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const breakpoints = {
  1024: { itemsToShow: 5 },
  768: { itemsToShow: 3 },
  480: { itemsToShow: 1 },
  400: { itemsToShow: 1 },
  300: { itemsToShow: 1 },
};
</script>

