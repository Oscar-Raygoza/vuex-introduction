const getters = {
  someGetter(/* state */) {
    // return true;
  },
  isPropReady(state) {
    console.log({ emmit: "getter", state });
    return !!state.prop;
  },
};

export default getters;
