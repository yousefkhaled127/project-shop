<template>
    <section>
        <div class="container">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page"><nuxt-link to="/">Home</nuxt-link> <font-awesome-icon
                            icon="fa-solid fa-angle-right" /></li>

                    <li class="breadcrumb-item active black" aria-current="page">Cart</li>
                </ol>
            </nav>
            <h1 class="bold mb-5">Your cart</h1>
            <h1 class="mt-5 text-center bold" v-if="carts.length == 0">NO CART</h1>
            <div class="row" v-if="carts.length > 0">
                <div class="col-lg-6">
                    <div class="cart-content">
                        <div class="cart-box" v-for="cart in carts" :key="cart.id">
                            <div v-for="product in cart.products" :key="product.id" class="d-flex gap-3 mb-3 cart-inner">
                                <img :src="product.image" alt="Product" class="img-cart" />
                                <div class="w-100">
                                    <div class="content-bettwen">
                                        <h6 class="bold ps-0 pe-3">{{ product.title }}</h6>
                                        <button @click="deleteCart(cart, product.id)" class="delete-cart">
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                    <p class="mt-2">{{ product.category }}</p>
                                    <div class="content-bettwen mt-5">
                                        <h3>${{ product.price * product.quantity }}</h3>

                                        <div class="calc-prudact calc-cart">
                                            <button @click="product.quantity > 0 && product.quantity--"
                                                class="box-size">
                                                <font-awesome-icon icon="fa-solid fa-minus" />
                                            </button>
                                            <h5>{{ product.quantity }}</h5>
                                            <button @click="product.quantity++" class="box-size">
                                                <font-awesome-icon icon="fa-solid fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="cart-content">
                        <h5>Order Summary</h5>
                        <div class="content-bettwen mt-3">
                            <h5 class="text-trans">Subtotal</h5>
                            <h5 class="bold">$565</h5>
                        </div>
                        <div class="content-bettwen mt-3">
                            <h5 class="text-trans">Discount (-20%)</h5>
                            <h5 class="red">-$113</h5>
                        </div>
                        <div class="content-bettwen mt-3">
                            <h5 class="text-trans">Delivery Fee</h5>
                            <h5 class="bold">$15</h5>
                        </div>
                        <div class="content-bettwen mt-4">
                            <h5 class="text-trans">Total</h5>
                            <h5 class="bold">$467</h5>
                        </div>
                        <form action="" class="form-cart mt-5">
                            <div class="content-search cart-form-box">
                            <img src="../assets/images/Vector (312).png" alt="">
                            <input type="text" placeholder="Add promo code">
                        </div>
                        <button class="button-all">Apply</button>
                        </form>
                

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const globalHome = useGlobalStore();
const carts = ref(globalHome.cartsArray);
console.log(globalHome.cartsArray)
const deleteCart = (cart, productId) => {
    const index = cart.products.findIndex(p => p.id === productId);
    if (index !== -1) {
        cart.products.splice(index, 1);
    }

    // Optional: remove the cart entirely if no products left
    if (cart.products.length === 0) {
        const cartIndex = carts.value.indexOf(cart);
        if (cartIndex !== -1) {
            carts.value.splice(cartIndex, 1);
        }
    }
};
</script>