const getters = {
  someGetter(/* state */) {
    // return true;
  },
  isPropReady(state) {
    console.log({ emmit: "getter", state });
    return !!state.prop;
  },
  getTotal(state) {
    if (state.shopList.length < 1) {
      return 0;
    }
    let total = 0;

    state.shopList.map((item) => {
      if (!item.completed) {
        total += parseFloat(item.price);
      }
      return total;
    });

    return state.total;
  },
};

export default getters;
