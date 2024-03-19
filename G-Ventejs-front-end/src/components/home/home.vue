<template>
  <!-- <Header/> -->
  <headContent />
  <ViewSomeProductVue />
  <SimilarAboutVue />
  <PopularProductVue />
  <!-- <TestimonialVue /> -->
  <SimilarBlogsVue />
  <FooterVue />
  <!-- <Shop /> -->
</template>

<script>
import FooterVue from './Footer.vue';
import Header from './Header.vue';
import PopularProductVue from './PopularProduct.vue';
import SimilarAboutVue from './SimilarAbout.vue';
import SimilarBlogsVue from './SimilarBlogs.vue';
import headContent from './headContent.vue';
// import TestimonialVue from './Testimonial.vue';
import ViewSomeProductVue from './ViewSomeProduct.vue';
import Shop from "./Shop.vue"
import axios from 'axios'


export default {
  data(){
  return{
   username:''
  }
},
components:{
    Header,
    headContent,
    ViewSomeProductVue,
    SimilarAboutVue,
    PopularProductVue,
    // TestimonialVue,
    SimilarBlogsVue,
    FooterVue,
    Shop
},
mounted() {
  // axios.get('http://localhost:4000/user/users/authuser')
  //   .then(response=>{
  //     console.log(response.data);
  //     // this.$router.push('/login')
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
}
}
</script>

<style>

</style>