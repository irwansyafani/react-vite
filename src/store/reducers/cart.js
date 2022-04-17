import { ADD, ADD_SAGA, RESET, RESET_SAGA } from "../types";

const cart = {
  items: [],
};

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case /* ADD || */ ADD_SAGA:
      return {
        ...state,
        items: action.payload,
      };
    case /* RESET || */ RESET_SAGA:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
