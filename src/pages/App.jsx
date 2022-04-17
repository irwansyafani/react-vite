import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// redux
import { Provider, useSelector } from "react-redux";
import store from "../store";

import Home from "./home";
import ProductDetail from "./products/detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
