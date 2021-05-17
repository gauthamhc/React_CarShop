import React, { createContext, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Nike Shoes 01",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_santro.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "2",
      title: "Nike Shoes 02",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_nios.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 19,
      colors: ["red", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "3",
      title: "Nike Shoes 03",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_i20.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 50,
      colors: ["lightblue", "white", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "4",
      title: "Nike Shoes 04",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_verna.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 15,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "5",
      title: "Nike Shoes 05",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_creta.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 10,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "6",
      title: "Nike Shoes 06",
      src: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/1600x590_kona.png",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 17,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
        total,
        reduction,
        increase,
        removeProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
