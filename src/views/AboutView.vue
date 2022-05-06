<template>
  <div class="about">
    <h1>Shop List Vuex</h1>
    <br/>
    <ShopListVuex />
  </div>
</template>


<script>
// @ is an alias to /src
import ShopListVuex from "@/components/ShopListVuex.vue";

export default {
  name: "AboutView",
  components: {
    ShopListVuex,
  },
};
</script>
