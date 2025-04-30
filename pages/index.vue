<template>
  <!-- <h1>{{ $t("home") }}</h1> -->
  <section class="section-parent">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="title-parent">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p class="mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your
            individuality and cater to your sense of style.</p>
          <button class="button-all mt-4">Show Now</button>

          <div class="mb-5 box-sallery">
            <div class="mt-4">
              <h1 class="title-sallery">200+</h1>
              <h6 class="text-trans">International Brands</h6>
            </div>
            <div class="mt-4">
              <h1 class="title-sallery">2,000+</h1>
              <h6 class="text-trans">International Brands</h6>
            </div>
            <div class="mt-4">
              <h1 class="title-sallery">30,000+</h1>
              <h6 class="text-trans">International Brands</h6>
            </div>
          </div>

        </div>
        <div class="col-lg-6">
          <div class="parent-box-img">
            <img class="img-parent" src="../assets/images/Rectangle 2.png" alt="">
            <img class="star-img" src="../assets/images/Vector (10).png" alt="">
            <img class="star-img-2" src="../assets/images/Vector (31).png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="inner">
      <div class="container">
        <div class="inner-content">
          <img src="../assets/images/Vector (20).png" alt="">
          <img src="../assets/images/Vector (21).png" alt="">
          <img src="../assets/images/Vector (22).png" alt="">
          <img src="../assets/images/Group (23).png" alt="">
          <img src="../assets/images/Vector (24).png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="mg-bottom">
    <h1 class="text-center bold">NEW ARRIVALS</h1>
    <div class="container">
      <ProductCompnent />
      <div class="content-center">
        <nuxt-link to="/" class="button-all button-view">View All</nuxt-link>
      </div>
    </div>
  </section>

  <section>
    <h1 class="text-center bold">TOP SELLING</h1>
    <div class="container">
      <ProductCompnent />
      <div class="content-center">
        <nuxt-link to="/" class="button-all button-view">View All</nuxt-link>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-styles">
        <h1 class="text-center bold">BROWSE BY dress STYLE</h1>
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="styles-box">
              <h5>Casual</h5>
              <img src="../assets/images/image 11.png" alt="">
            </div>
          </div>
          <div class="col-lg-8">
            <div class="styles-box">
              <h5>Casual</h5>
              <img src="../assets/images/image 13.png" alt="">
            </div>
          </div>
          <div class="col-lg-8">
            <div class="styles-box">
              <h5>Casual</h5>
              <img src="../assets/images/image 12.png" alt="">
            </div>
          </div>
          <div class="col-lg-4">
            <div class="styles-box">
              <h5>Casual</h5>
              <img src="../assets/images/image 14.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h1>OUR HAPPY CUSTOMERS</h1>

      <Carousel :itemsToShow="3" :wrapAround="true" :breakpoints="breakpoints">
        <template #addons>
          <Navigation />
        </template>


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
    

      </Carousel>
    </div>
  </section>
</template>
<script setup>
import { Carousel, Slide, Navigation, Pagination} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const breakpoints = {
  1024: { itemsToShow: 3 },
  768: { itemsToShow: 3 },
  480: { itemsToShow: 1 },
  450: { itemsToShow: 1 },
  400: { itemsToShow: 1 },
  300: { itemsToShow: 1 },
};

const reviews = ref([
  { id: 1, name: "Sarah M.", feedback: "I'm blown away by the quality and style of the clothes I received from Shop.co!" },
  { id: 2, name: "John D.", feedback: "Amazing designs and top-notch quality! Highly recommend." },
  { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." }
]);


</script>
