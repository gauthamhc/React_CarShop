import React, { useContext } from "react";
import { GlobalContext } from "../Components/Context";
import "../Styles/Cart.css";

const Cart = () => {
  const { cart, reduction, increase } = useContext(GlobalContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button className="count" onClick={() => reduction(item._id)}>
                  -
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item._id)}>
                  +
                </button>
              </div>
              <div className="buy-now">
                <button>Buy-Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
