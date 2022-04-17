import { ADD, LOGIN, RESET } from "../types";

export const setLogin = () => {
  return (props) => {
    console.log(props);
    return { type: LOGIN };
  };
};

export const setLogout = () => {
  return { type: LOGOUT };
};

export const addCart = (product) => {
  return (dispatch, getState) => {
    // PUT LOGIC OR FETCH DATA FROM HERE
    const cart = getState().cart;
    const existProduct = cart.items.find((item) => item.title == product.title);
    const productDetail = {
      title: product.title,
      price: product.price,
      qty: existProduct ? existProduct.qty + 1 : 1,
    };
    dispatch({ type: ADD, payload: [productDetail] });
  };
};

export const resetCart = () => {
  return { type: RESET };
};
