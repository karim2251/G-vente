<template>
  <div class="untree_co-section before-footer-section">
    <div class="container-fuild">
      <div class="row mx-5">
        <form class="col-md-9" method="post">
          <div class="site-blocks-table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-total">Total</th>
                  <th class="product-remove">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in productsCart" :key="product._id">
                  <td class="product-thumbnail">
                    <img
                    :src="'http://localhost:3000/productsImage/'+ product.photo"
                      alt="Image"
                      class="img-fluid"
                    />
                  </td>
                  <td class="product-name">
                    <h2 class="h5 text-black">{{product.nom}}</h2>
                  </td>
                  <td>${{product.prix}}</td>
                  <td>
                    <div
                      class="input-group mb-3 d-flex align-items-center quantity-container"
                      style="max-width: 120px"
                    >
                      <!-- <input
                        type="number"
                        class="form-control text-center"
                        v-model="product.qtestock"
                        min="1"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      /> -->
                      <span @click="setqtestock(product,'decrement')" style="font-size: 30px;cursor: pointer;">-</span>
                      <div style="font-size: 20px; padding: 0px 20px 0px 20px;">{{ product.qtestock }}</div>
                      <span  @click="setqtestock(product,'increment')" style="font-size: 30px;cursor: pointer;">+</span>
                    </div>
                  </td>
                  <td>${{product.prix * product.qtestock}}</td>
                  <td><a href="#" class="btn btn-black btn-sm">X</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div class="col-md-3">
          <div class="row justify-content-end">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <span class="text-black">Total Products</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">12</strong>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-6">
                  <span class="text-black">Total</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">$230.00</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 text-center">
                  <button class="btn btn-black py-2 btn-block">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsCart: null,
      qtestock:1
      
    };
  },
  mounted() {
    this.getProductCart();
  },
  methods: {
    getProductCart() {
      if (typeof Storage !== "undefined") {
        // get data from the local storage
        let items = JSON.parse(localStorage.getItem("products")) || [];
        // Add in the array 
        this.productsCart = items;
        console.log("length"+items.length);
      } else {
        console.error("localStorage is not supported");
      }
    },
    setqtestock(product,status){
      if (typeof(Storage) !== "undefined") {
        let items = JSON.parse(localStorage.getItem("products")) || [];
        let productfind = items.find(item=>JSON.stringify(item) === JSON.stringify(product));
        if(productfind){
          if(status === 'decrement' && productfind.qtestock > 1){
          let qtestock = productfind.qtestock;
          qtestock-=1;
          const productupdate = {
		      	_id:productfind._id,
            photo: productfind.photo,
			      nom: productfind.nom,
            prix: parseInt(productfind.prix),
            marque: productfind.marque,
            qtestock: parseInt(qtestock)
        };
        console.log(productupdate);
      }else if(status === 'increment'){
        let qtestock = productfind.qtestock;
          qtestock+=1;
          const productupdate = {
		      	_id:productfind._id,
            photo: productfind.photo,
			      nom: productfind.nom,
            prix: parseInt(productfind.prix),
            marque: productfind.marque,
            qtestock: parseInt(qtestock)
        };
        console.log(productupdate);
      }
        // let index = items.findIndex(product);
        // items.slice(index,1);
				// items.push(productupdate);
  			// localStorage.setItem("products", JSON.stringify(items));
			  // console.log("Item added to localStorage:", productData);

        }
        
      }
    }
  },
};
</script>

<style>
</style>