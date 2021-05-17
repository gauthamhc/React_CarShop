import React, { useState, useContext } from "react";
import "../Styles/Header.css";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";
import CartIcon from "../svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Components/Context";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const { cart } = useContext(GlobalContext);
  return (
    <div>
      <header>
        <div className="menu-btn" onClick={toggleHandler}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="name">
          <h1>
            <Link to="/product">Hyundai</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li className="close-btn" onClick={toggleHandler}>
              <img src={Close} width="20" />
            </li>
          </ul>

          <div className="cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
