<template>
  
     <!-- Vertical Form -->
     <div class="col-lg-6">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Vertical Form</h5>

     <form class="row g-3" @submit.prevent="addproduct">
                <div class="col-12">
                  <label for="inputNanme4" class="form-label">name product</label>
                  <input type="text" v-model="nameproduct" class="form-control" id="inputNanme4" required>
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">marque</label>
                  <input type="text" v-model="marque" class="form-control" id="inputEmail4" required>
                </div>
                <div class="col-12">
                  <label for="inputPassword4" class="form-label">prix</label>
                  <input type="number" v-model="prix" class="form-control" id="inputPassword4" required>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">qtestock</label>
                  <input type="number" v-model="qtestock" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">photo</label>
                  <input type="file"  class="form-control" id="photo" required>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </form><!-- Vertical Form -->
  </div>
  </div>
  </div>

</template>

<script>
export default {
data(){
    return{
        nameproduct :'',
        marque :'',
        prix :null,
        qtestock :null,
        photo :'',
        
    }
},
methods:{
    addproduct(){
       
    }
}
}
</script>

<style>

</style>