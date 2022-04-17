import { RESET_ACCOUNTS_SAGA } from "../types";

const db = {
  accounts: [],
};

const accountReducer = (state = db, action) => {
  switch (action.type) {
    case RESET_ACCOUNTS_SAGA:
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
