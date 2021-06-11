import React from "react";
import "./index.css";
import "./responvive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsScreen from "./screens/ProductsScreen";
import ScrollToTop from "./components/ScrollToTop";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethod from "./screens/PaymentMethod";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Switch>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/products/:id" component={ProductsScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegistrationScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentMethod} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/ordershisyory" component={OrderHistoryScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
