const mutation = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  setIsProp(state, isPropValue) {
    console.log({ emmit: "mutation", state, isPropValue });
    state.prop = isPropValue;
  },
  createItem(state, { id, text, price }) {
    const item = {
      id: id,
      text: text,
      price: price,
      completed: false,
    };
    console.log({ emmit: "mutation", state, item });
    state.shopList = [...state.shopList, item];
    state.newItem = "";
    state.price = "";
  },
  completeItemList(state, id) {
    state.shopList.map((item, index) => {
      if (item.id === id) {
        state.shopList[index].completed = !item.completed;
      }
      return null;
    });
  },
};

export default mutation;
