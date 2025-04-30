<template>
  <header>
    <div class="header-content">
      <div class="container">
        <div class="header-inner">
          <p class="text-white text-center w-100">Sign up and get 20% off to your first order. <span
              class="ms-1 text-decoration-underline">Sign Up Now</span></p>
        </div>
      </div>
    </div>
    <div class="header-inks">
      <div class="container">
        <nav class="nav-links">
          <div class="d-flex align-items-center gap-3">
            <button :class="{ btnexit_links: buttonShowlinks }" @click="buttonShowlinks = true" class="btn-show-links">
              <span></span>
              <span></span>
              <span class="mb-0"></span>
            </button>
            <nuxt-link to="/">
              <img class="img-logo" src="../assets/images/SHOP.CO.png" alt="">
            </nuxt-link>
 
          </div>
          <div @click="buttonShowlinks = false" :class="{ 'popup-header-show': buttonShowlinks }" class="popup-header">
            <ul @click="stopprop" class="links" :class="{ 'links-show': buttonShowlinks }">
              <li>
                <NuxtLink @click.native="handleNavigation" to="/">Shop</NuxtLink>
              </li>
              <li>
                <NuxtLink @click.native="handleNavigation" to="/">On Sale</NuxtLink>
              </li>
              <li>
                <NuxtLink @click.native="handleNavigation" to="/">New Arrivals</NuxtLink>
              </li>
              <li>
                <NuxtLink @click.native="handleNavigation" to="/">Brands
                </NuxtLink>
              </li>
            </ul>
          </div>

          <form class="form-search" :class="{ 'form-search-show': Search }">
            <div class="content-search">
              <img src="../assets/images/Frame (6).png" alt="">
              <input placeholder="Search for products..." type="search">
            </div>
            <button class="exit-search" @click.prevent="Search = false">
              <img src="../assets/images/Vector (x).png" alt="">
            </button>
          </form>

          <div class="d-flex gap-3 align-items-center">
            <img @click="Search = true" class="img-search" src="../assets/images/Vector (2).png" alt="">
            <nuxt-link to="/">
              <img src="../assets/images/Vector (3).png" alt="">
            </nuxt-link>
            <nuxt-link to="/">
              <img src="../assets/images/Vector (4).png" alt="">
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath();



function handleNavigation() {
  buttonShowlinks.value = false;
}

const buttonShowlinks = ref(false);


function stopprop(e) {
  e.stopPropagation();
}



const Search = ref(false);



</script>

<style>
/* start header  */

.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
}

.header-content {
  width: 100%;
  background-color: var(--min-color);
  padding: 15px;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head-hint {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.item-text-head {
  font-size: 17px;
}

.header-inks {
  box-shadow: 0 2.243px 4.486px 0 hsla(34, 44%, 77%, .2);
  padding: 15px;
}

.nav-links {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
}

.select-language {
  background: none;
  padding: 10px;
  border: none;
  font-size: 17px;
}

.select-language:focus-visible {
  outline: none;
}

.chevron-language {
  font-size: 11px;
  position: absolute;
  bottom: 15px;
  left: -4px;
}

.login-icon {
  display: none !important;
}

.content-search {
  width: 400px;
  background-color: #eee;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-search input {
  width: 100%;
  background: none;
  border: none;
}

input:focus {
  outline: none;
}

.img-search {
  display: none;
}

.exit-search {
  display: none;
}

.img-logo {
  width: 180px;
}
/* end header */
@media (max-width: 992px) {

  /* start header responseve */
  .btnexit_links span:nth-child(1) {
    position: absolute;
    transform: rotate(132deg);
  }

  .btnexit_links span:nth-child(2) {
    display: none;
  }

  .btnexit_links span:nth-child(3) {
    transform: rotate(47deg);
  }

  .popup-header {
    display: block;
    position: fixed;
    right: 100%;
    top: 0px;
    background: #0000003b;
    width: 100%;
    height: 100vh;
    transition: 0.6s;
    z-index: 22223;
  }

  .popup-header-show {
    right: 0;
  }

  .links {
    justify-content: start;
    width: 200px;
    flex-direction: column;
    gap: 40px;
    background: var(--min-color);
    height: 100vh;
    padding-top: 30px !important;
    position: fixed;
    right: -100%;
    transition: 0.6s;
  }

  .links-show {
    right: 0;
  }

  .router-link-active {
    color: white !important;
  }

  .btn-show-links {
    display: block;
  }

  .btn-show-links span {
    display: block;
    width: 37px;
    height: 4px;
    background-color: var(--min-color);
    margin-bottom: 5px;
    transition: 0.6s;
  }

  .nav-links {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-search {
    position: fixed;
    top: -43%;
    background: #000000ad;
    width: 100%;
    left: 0;
    padding: 20px;
    transition: 0.4s;
    display: flex;
    gap: 40px;
  }

  .form-search-show {
    top: 0;
  }

  .form-search .content-search {
    width: 90%;
  }

  .img-search {
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  .exit-search {
    display: block;
  }
  .links-show a {
    color: white !important;
  }
  /* end header responseve */
}

@media (max-width: 768px) {
  .item-text-head {
    display: none;
  }

  .login-icon {
    display: block !important;
    font-size: 28px;
  }

  .head-hint {
    width: 100%;
    gap: 6px;
    justify-content: end;
  }
  .img-logo {
    width: 100px;
  }

}
</style>