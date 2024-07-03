import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getCart = () => cart;

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const updateItemQuantity = (product, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const getItemCount = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        getCart,
        addToCart,
        removeItemFromCart,
        updateItemQuantity,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
