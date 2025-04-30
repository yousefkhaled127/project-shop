<template>
    <Slide v-for="review in reviews" :key="review.id">
        <div class="carousel-box">
            <p class="d-flex gap-1">
                <font-awesome-icon v-for="n in 5" :key="n" class="star-icon" icon="fa-solid fa-star" />
            </p>
            <div>
                <h5 class="mb-3 mt-3">{{ review.name }}</h5>
                <p>{{ review.feedback }}</p>
            </div>
        </div>
    </Slide>
</template>

<script setup>

const reviews = ref([
  { id: 1, name: "Sarah M.", feedback: "I'm blown away by the quality and style of the clothes I received from Shop.co!" },
  { id: 2, name: "John D.", feedback: "Amazing designs and top-notch quality! Highly recommend." },
  { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." }
]);

</script>