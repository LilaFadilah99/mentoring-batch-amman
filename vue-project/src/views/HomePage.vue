<template>
  <div>
    <!-- navbar -->
    <NavigationBar />
    <!-- end navbar -->

    <!-- card -->
    <div class="container">
      <div class="row">
        <CardComponents
          v-for="products in products"
          :key="products"
          :products="products"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../stores/product";
import CardComponents from "../components/CardComponents.vue";
import NavigationBar from "../components/NavigationComponents.vue";

export default {
  // name untuk memberi nama page/component kita
  name: "HomePage",
  components: {
    CardComponents,
    NavigationBar,
  },
  // untuk memanggil state yg kita punya di store
  computed: {
    ...mapState(useProductStore, ["products"]),
  },
  // untuk memanggil action/function yg kita punya di store
  methods: {
    ...mapActions(useProductStore, ["handleGetProducts"]),
  },
  // cara kita memanggil data agar dijalankan sejak mulai render
  created() {
    this.handleGetProducts();
  },
};
</script>

<style>
</style>