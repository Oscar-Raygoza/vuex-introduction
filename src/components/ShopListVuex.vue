<template>
  <div class="item-list">
    <h1>{{ getShopList.length }} en lista de compras</h1>
    <form class="form" @submit.prevent="createItem">
      <label class="label" for="item"
        >Agregar nuevo producto:
        <input class="input" type="text" v-model="text" id="item" />
      </label>

      <label class="label" for="price"
        >Agregar nuevo producto:
        <input class="input" type="number" v-model="price" id="price" />
      </label>
      <br /><br />
      <input class="button" type="submit" value="Agregar a la lista" />
    </form>

    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in getShopList"
        :key="index"
        :class="{ completed: item.completed }"
        @click="completeItemList(item.id)"
      >
        {{ item.text }}
      </li>
    </ul>

    <h1>
      Total: <b>${{ getTotal }}</b>
    </h1>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data: () => ({
    text: "",
    price: 0,
  }),
  computed: {
    getShopList() {
      return this.$store.state.shop.shopList;
    },
    getTotal() {
      return this.$store.state.shop.getTotal;
    }
  },
  methods: {
    createItem() {
      this.$store.commit("shop/createItem", {
        id: this.getShopList.length +1, 
        text: this.text, 
        price: this.price,
      });
    },
    completeItemList(id) {
      this.$store.commit("shop/completeItemList", id);
    },
  },
};
</script>

<style scoped>
.item-list {
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
}

.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
}

.label {
  display: block;
  margin-bottom: 10px;
}

.input {
  height: 35px;
}

.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #2ecc71;
  color: #ecf0f1;
  cursor: pointer;
}

.list {
  margin-top: 40px;
}

.item {
  cursor: pointer;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>
