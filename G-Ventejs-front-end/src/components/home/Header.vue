<template>
  

		<!-- Start Header/Navigation -->
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
    <a class="navbar-brand" href="#">Furino<span>.</span></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item" :class="{'active': activeLink === '/' }" >
                <RouterLink class="nav-link" @click="setActive('/')" to="/" >Home</RouterLink>
            </li>
            <li :class="{'active': activeLink === '/shop' }">
                <RouterLink @click="setActive('/shop')" class="nav-link" to="/shop" >Shop</RouterLink>
            </li>
            <li><a class="nav-link" href="#">About us</a></li>
            <li><a class="nav-link" href="#">Services</a></li>
            <li><a class="nav-link" href="#">Blog</a></li>
            <li><a class="nav-link" href="#">Contact us</a></li>
            <!-- <li :class="{'active': activeLink === '/dashboard' }">
                <RouterLink @click="setActive('/dashboard')" class="nav-link" to="/dashboard" >Dashboard</RouterLink>
            </li> -->
        </ul>

        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a class="nav-link" href="#"><img src="../../../images/user.svg"></a></li>
            <li><RouterLink class="nav-link" to="/cart"><img src="../../../images/cart.svg"></RouterLink></li>
        </ul>
    </div>
</div>
    
</nav>
<!-- End Header/Navigation -->


</template>

<script>
export default {
    data() {
    return {
      activeLink: '/' ,
    };
  },
  methods: {
    setActive(link) {
      this.activeLink = link;
    }
  }
 
}

 
</script>

<style>

</style>