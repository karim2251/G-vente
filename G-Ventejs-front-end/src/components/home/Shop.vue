<template>


  <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">

		      		<!-- Start Column 1 -->
					<div  v-for="product in products" :key="product._id" class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" @click="AddToCart(product)" href="#">
							<img :src="'http://localhost:3000/productsImage/'+ product.photo" class="img-fluid product-thumbnail">
							<h3 class="product-title">{{ product.nom }}</h3>
							<strong class="product-price">${{ product.prix }}</strong>

							<span class="icon-cross">
								<img src="../../../images/cross.svg" class="img-fluid">
							</span>
						</a>
					</div> 
					
					<div v-if="products == null">
					<p>no products here</p>
					</div>
					<!-- End Column 1 -->
						
		      	</div>
		    </div>
		</div>

    <FooterVue/>

</template>

<script>
import FooterVue from './Footer.vue';


export default {
// beforeRouteEnter(to){
// 	alert('please login first')

// 	if (to.name !== 'login'){
// 		return '/login'
// 	}
// },
components:{
    FooterVue
},
data(){
    return{
        products :null,
    }
},
mounted(){
this.getAllproduct()
},
methods:{
    getAllproduct(){
        fetch('http://localhost:4000/products/')
        .then(response => response.json())
        .then(data => this.products = data)
        .catch(error => console.error(error));   
     },
	 AddToCart(product){
		const productData = {
			_id:product._id,
            photo: product.photo,
			nom: product.nom,
            prix: parseInt(product.prix),
            marque: product.marque,
            qtestock: parseInt(1)
        };

        // Check if localStorage is supported
        if (typeof(Storage) !== "undefined") {
            // Retrieve existing items from localStorage
            let items = JSON.parse(localStorage.getItem("products")) || [];

			if(!items.some(item => JSON.stringify(item) === JSON.stringify(productData))){

				// Add the new item to the array
				items.push(productData);

				// Store the updated array back in localStorage
				localStorage.setItem("products", JSON.stringify(items));

				console.log("Item added to localStorage:", productData);
			}else{
				console.log("Product already exists in localStorage:")
			}

        } else {
            console.error("localStorage is not supported");
        }
	 }
}

}
</script>

<style>

</style>