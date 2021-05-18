import React, { createContext, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Hyundai Santro",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_santro.png",
      description: "5 MT, Smart Auto AT",
      content: "",
      price: 5555,

      count: 1,
    },
    {
      _id: "2",
      title: "Hyundai Nios ",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_nios.png",
      description: "5 MT, Smart Auto AT",
      content: "",
      price: 6666,

      count: 1,
    },
    {
      _id: "3",
      title: "Hyundai i20",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_i20.png",
      description: "5 MT, 6 MT, 7 DCT, IVT, IMT",
      content: "",
      price: 7777,

      count: 1,
    },
    {
      _id: "4",
      title: "Hyundai Elantra",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_verna.png",
      description: "6 MT, 6 AT",
      content: ".",
      price: 20000,

      count: 1,
    },
    {
      _id: "5",
      title: "Hyundai Creta",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_creta.png",
      description: "5 MT, 6 AT, 7 DCT, IVT",
      content: ".",
      price: 140000,

      count: 1,
    },
    {
      _id: "6",
      title: "KONA Electric",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_kona.png",
      description: "AT",
      content: ".",
      price: 32500,

      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart(cart);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        products,
        cart,
        addCart,
        reduction,
        increase,
        removeProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
