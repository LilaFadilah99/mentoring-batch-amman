import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      products: [],
    };
  },

  actions: {
    handleGetProducts() {
      axios
        .get("http://localhost:3000/products")
        .then(({ data }) => {
          console.log(data);
          this.products = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
