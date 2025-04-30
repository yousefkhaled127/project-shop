<template>
    <section>
        <div class="container">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page"><nuxt-link to="/">Home</nuxt-link> <font-awesome-icon
                            icon="fa-solid fa-angle-right" /></li>

                    <li class="breadcrumb-item active" aria-current="page">Shop <font-awesome-icon
                            icon="fa-solid fa-angle-right" /></li>
                    <li class="breadcrumb-item active" aria-current="page">Men <font-awesome-icon
                            icon="fa-solid fa-angle-right" /></li>
                    <li class="breadcrumb-item black">T-shirts</li>
                </ol>
            </nav>
            <div class="mt-5">
                <div class="row">
                    <div class="col-lg-6">
                        <Galleria :value="image" :responsiveOptions="responsiveOptions" :numVisible="5"
                            containerStyle="max-width: 640px" :circular="true" :autoPlay="false"
                            :transitionInterval="3000">
                            <template #item="{ item }">
                                <Image :src="item.image" :alt="item.alt" class="fancyImg" preview
                                    style="width: 100%; display: block; cursor: pointer;" />
                            </template>
                            <template #thumbnail="{ item }">
                                <img loading="lazy" :src="item.image" :alt="item.alt" style="display: block" />
                            </template>
                        </Galleria>
                    </div>
                    <div class="col-lg-6">
                        <div class="inner-product">
                            <h1 class="bold">{{ product.title }}</h1>
                            <div class="d-flex gap-2 align-items-center mt-3">
                                <p class="d-flex gap-1">
                                    <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                                    <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                                    <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                                    <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                                    <font-awesome-icon class="star-icon" icon="fa-solid fa-star" />
                                </p>
                                <p v-if="product.rating">{{ product.rating.rate }}/5</p>
                            </div>
                            <h2 class="mt-3">${{ product.price }}</h2>
                            <p class="color-trans mt-3">{{ product.description }}</p>
                            <div class="d-flex align-items-center mt-5 gap-4 ">
                                <div class="calc-prudact">
                                    <button @click="minus" class="box-size">
                                        <font-awesome-icon icon="fa-solid fa-minus" />
                                    </button>
                                    <h5>{{ number }}</h5>
                                    <button @click="number++" class="box-size">
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                    </button>
                                </div>
                                <button @click="addCart" class="button-all button-add-card">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <Tabs v-model:value="value">
                <TabList>
                    <Tab value="0">Product Details</Tab>
                    <Tab value="1">Rating & Reviews</Tab>
                    <Tab value="2">FAQs</Tab>
                </TabList>
                <div class="dropdown-content mt-4">

                    <div class="d-flex gap-1 align-items-center">
                        <h4>All Reviews </h4>
                        <span class="color-trans">(451)</span>
                    </div>

                    <div class="d-flex gap-3 align-items-center flex-wrap">
                        <button class="dropdown-prudact">
                            <font-awesome-icon icon="fa-solid fa-sliders" />
                        </button>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle dropdown-prudact" href="#" role="button"
                                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Latest
                                <font-awesome-icon class="ms-2" icon="fa-solid fa-angle-down" />
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <button class="button-all">Write a Review</button>

                    </div>
                </div>
                <TabPanels>
                    <TabPanel value="0">
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </TabPanel>
                    <TabPanel value="1">
                        <div class="row">
                            <div class="col-lg-6" v-for="review in reviews" :key="review.id">
                                <div class="carousel-box">
                                    <p class="d-flex gap-1">
                                        <font-awesome-icon v-for="n in 5" :key="n" class="star-icon"
                                            icon="fa-solid fa-star" />
                                    </p>
                                    <div>
                                        <h5 class="mb-3 mt-3">{{ review.name }} <img class="img-done"
                                                src="../../assets/images/Frame-done.png" alt=""></h5>
                                        <p>{{ review.feedback }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel value="2">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                            non
                            provident, similique sunt in culpa
                            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </section>
    <div class="content-center">
        <nuxt-link to="/" class="button-all button-view">Load More Reviews</nuxt-link>
    </div>

    <div>
        <h1 class="text-center bold mt-5">You might also like</h1>
    </div>

    <section>
        <div class="container">
            <ProductCompnent />
        </div>
    </section>
</template>

<script setup>
const { useFetchAPI, $fetchAPI, loading } = useAPI();
const { data, error } = await useFetchAPI(`products/${useRoute().params.id}`);
const product = ref({});
product.value = data.value
console.log(product.value)
const number = ref(2);
function minus() {
    if (number.value > 0) {
        number.value--;
    }
}
const image = ref([
    { image: product.value.image, alt: product.value.title }
]);
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    },
]);
const value = ref('1');
const reviews = ref([
    { id: 1, name: "Sarah M.", feedback: "I'm blown away by the quality and style of the clothes I received from Shop.co!" },
    { id: 2, name: "John D.", feedback: "Amazing designs and top-notch quality! Highly recommend." },
    { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." },
    { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." },
    { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." },
    { id: 3, name: "Lisa K.", feedback: "Affordable and stylish! My go-to store for fashion needs." }
]);
const globalHome = useGlobalStore();
const addCart = async () => {
    const cart = {
        products: [{
            id: product.value.id,
            quantity: number.value,
            title: product.value.title,
            price: product.value.price,
            description: product.value.description,
            category: product.value.category,
            image: product.value.image
        }]
    };
    try {

        globalHome.cartsArray.push(cart);
        console.log(globalHome.cartsArray)

        navigateTo("/cart")
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};

</script>