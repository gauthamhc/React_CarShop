import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../Components/Context";
import { Link } from "react-router-dom";
import "../Styles/Details.css";

const Details = ({ match }) => {
  const { products } = useContext(GlobalContext);
  const [newProducts, setNewProducts] = useState([]);

  const getProduct = () => {
    if (match.params.id) {
      const res = products;
      const data = res.filter((item) => {
        return item._id === match.params.id;
      });
      setNewProducts(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {newProducts.map((product) => {
        return (
          <div className="details" key={product._id}>
            <img src={product.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
              </div>

              <p>{product.description}</p>
              <p>{product.content}</p>
              <Link to="/cart" className="cart">
                Add to cart
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;
