export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
};

export const removeFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "removeFromCart",
      payload: item,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: "clearCart",
    });
  };
};
