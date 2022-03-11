const reducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removefromcart": {
      const cartitems = [...state];
      const removedCart = cartitems.filter(
        (item) => item.id !== action.payload
      );
      return removedCart;
    }
    default:
      return state;
  }
};

export default reducer;
