const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "ADD_ITEM":
      return state + 1;
    case "REMOVE_ITEM":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export { initialState, reducer };
