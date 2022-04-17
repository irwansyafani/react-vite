import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD,
  ADD_SAGA,
  LOGIN,
  LOGIN_SAGA,
  RESET_ACCOUNTS,
  RESET_ACCOUNTS_SAGA,
} from "../types";
import store from "../index";
import axios from "axios";

// ========================================================== HELPER FUNCTION
const cartValidation = (product) => {
  const cart = store.getState().cart;
  const existProduct = cart.items.find((item) => item.title == product.title);
  const productDetail = {
    title: product.title,
    price: product.price,
    qty: existProduct ? existProduct.qty + 1 || 1 : 1,
  };
  return [productDetail];
};

const initialAccounts = async () => {
  return await (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
};
// ======================================================== ^HELPER FUNCTION^

// action: contains { type, payload }
function* addCart(action) {
  try {
    const data = yield call(cartValidation, action.payload[0]);
    yield put({ type: ADD_SAGA, payload: data });
  } catch (e) {
    yield console.error(e.message);
  }
}

function* resetAccount() {
  try {
    const data = yield call(initialAccounts);
    yield put({ type: RESET_ACCOUNTS_SAGA, payload: data });
  } catch (e) {
    yield console.error(e.message);
  }
}

function* login(action) {
  try {
    yield put({
      type: LOGIN_SAGA,
      payload: { auth: true, account: action.payload },
    });
  } catch (e) {
    yield console.error(e.message);
  }
}

export function* rootSaga() {
  yield takeLatest(ADD, addCart);
  yield takeLatest(RESET_ACCOUNTS, resetAccount);
  yield takeLatest(LOGIN, login);
}
