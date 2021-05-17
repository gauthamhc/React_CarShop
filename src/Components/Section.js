import React from "react";
import Products from "../Section/Products";
import Details from "../Section/Details";
import { Route } from "react-router-dom";
import Cart from "../Section/Cart";

const Section = () => {
  return (
    <section>
      <Route path="/product" component={Products} exact />
      <Route path="/product/:id" component={Details} exact />
      <Route path="/cart" component={Cart} exact />
    </section>
  );
};

export default Section;
