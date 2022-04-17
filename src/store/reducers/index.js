import { combineReducers } from "redux";
import cart from "./cart";
import auth from "./auth";
import accounts from "./accounts";

export default combineReducers({ cart, auth, accounts });
