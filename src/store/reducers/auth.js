import { ACCOUNT_SAGA, LOGIN_SAGA } from "../types";

const person = {
  isAuthenticate: null,
  account: null,
};

const authReducer = (state = person, action) => {
  switch (action.type) {
    case LOGIN_SAGA:
      return {
        ...state,
        isAuthenticate: action.payload.auth,
        account: action.payload.account,
      };
    case ACCOUNT_SAGA:
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
