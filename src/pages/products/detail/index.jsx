import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Navbar } from "../../../components/navbar";
import { product_detail } from "../../../assets/utils/data";
// import { addCart } from "../../../store/thunks";
import { ADD, LOGIN, RESET_ACCOUNTS, RESET_SAGA } from "../../../store/types";

const Index = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const images = product_detail.images;
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const accounts = useSelector((state) => state.accounts.accounts);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });

  useEffect(() => {
    dispatch({ type: RESET_ACCOUNTS });
  }, []);

  const addtocart = () => {
    // ======================================= WITHOUT THUNK
    // const existProduct = cart.items.find(
    //   (item) => item.title == product_detail.title
    // );
    // const productDetail = {
    //   title: product_detail.title,
    //   price: product_detail.price,
    //   qty: existProduct ? existProduct.qty + 1 : 1,
    // };
    // dispatch({ type: "ADD", payload: [productDetail] });

    // ========================================== WITH THUNK
    // dispatch(addCart(product_detail));

    // =========================================== WITH SAGA
    dispatch({ type: ADD, payload: [product_detail] });
  };

  const customStyles = {
    content: {
      width: "25rem",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const closeModal = () => setModal(false);
  const openModal = () => {
    if (auth.isAuthenticate) {
      setModal(true);
    } else {
      setModal2(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const findAccount = accounts.find((ac) => ac.email == login.email);
    setModal2(false);
    if (findAccount) {
      dispatch({ type: LOGIN, payload: findAccount });
      alert("authenticated");
      if (cart.items.length) setModal(true);
    } else {
      alert("account not found");
    }
  };

  return (
    <>
      <Navbar />
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn btn-outline-secondary" onClick={closeModal}>
          close
        </button>
        <div className="py-5">
          {cart.items.map((el, i) => {
            const total = new Intl.NumberFormat(["ban", "id"]).format(
              el.price * el.qty
            );
            return (
              <div key={i} className="row">
                <p className="col-4">{el.title}</p>
                <p className="col-4">{el.qty}</p>
                <p className="col-4">IDR {total}</p>
                <button className="btn btn-secondary" onClick={closeModal}>
                  Pay
                </button>
              </div>
            );
          })}
        </div>
      </Modal>
      <Modal
        isOpen={modal2}
        onRequestClose={() => setModal2(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="btn btn-outline-secondary"
          onClick={() => setModal2(false)}
        >
          close
        </button>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </Modal>
      <section className="product-detail">
        <div className="info">
          <h4 className="text-capitalize">{params.id.replaceAll("-", " ")}</h4>
          <p>Kursi malas, warna hitam veneer kayu oak</p>
          <p>Rp. 399.000</p>
          <div className="w-100 row mx-md-0">
            <button
              className="btn btn-outline-secondary col-4 col-md-6 mx-3 mx-md-0"
              onClick={addtocart}
            >
              Add to cart
            </button>
            <button
              className="btn btn-secondary col-7 col-md-6"
              onClick={openModal}
            >
              Checkout
            </button>
          </div>
        </div>
        <div className="d-flex">
          {images.map((img, i) => {
            return (
              <div key={i} className="product-img ratio ratio-1x1">
                <img src={img} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Index;
