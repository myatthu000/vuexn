<template>
  <div>
    <ProductListOne ></ProductListOne>
    <ProductListTwo ></ProductListTwo>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import ProductListOne from "./components/productListOne.vue";
import ProductListTwo from "./components/productListTwo.vue";

  export default {
    name:"App",
    components: { ProductListOne, ProductListTwo },
    data() {
      return {
       
      }
    },
    
    //  computed: {
    //     products() {
    //       return this.$store.state.products
    //     },
    //     saleProducts(){
    //       return this.$store.getters.saleProducts
    //     }
    //   },
}
</script>

<style lang="scss" scoped>

</style>