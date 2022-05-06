<template>
  <div class="home">
      <h1>Shop List Vue</h1>
    <br/>
    <ShopList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopList from "@/components/ShopList.vue";

export default {
  name: "HomeView",
  components: {
    ShopList,
  },
};
</script>
