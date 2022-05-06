const mutation = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
  setIsProp(state, isPropValue) {
    console.log({ emmit: "mutation", state, isPropValue });
    state.prop = isPropValue;
  },
};

export default mutation;
