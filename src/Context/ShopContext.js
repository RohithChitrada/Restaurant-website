import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ message: '', visible: false });

  const showNotification = (message, duration = 2000) => {
    setNotification({ message, visible: true });
    setTimeout(() => {
      setNotification({ message: '', visible: false });
    }, duration);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        showNotification(`${item.name} quantity updated!`);
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      showNotification(`${item.name} added to cart!`);
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    const itemToRemove = cart.find((item) => item._id === id);
    if (itemToRemove) {
      showNotification(`${itemToRemove.name} removed from cart!`);
    }

    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    showNotification('Cart cleared!');
    setCart([]);
  };

  const getLength = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getLength,
        notification,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  return useContext(ShopContext);
};
