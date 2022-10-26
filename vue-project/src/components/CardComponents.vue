<template>
  <div class="col-4">
    <div class="card mt-5">
      <img :src="products.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ products.name }}</h5>
        <p class="card-text">
          {{ products.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponents",
  props: ["products"],
};
</script>

<style>
</style>