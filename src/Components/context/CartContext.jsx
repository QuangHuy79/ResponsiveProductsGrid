// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const openCart = () => setIsCartOpen(true);
//   const closeCart = () => setIsCartOpen(false);

//   return (
//     <CartContext.Provider value={{ isCartOpen, openCart, closeCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// ***** Thêm dữ liệu động từ Api *****

import React, { createContext, useContext, useState } from "react";

// 1. Tạo context
const CartContext = createContext();

// 2. Provider bao bọc toàn app
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // ✅ thêm dòng này

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // ✅ Hàm thêm sản phẩm
  // const addToCart = (item) => {
  //   setCartItems((prev) => [...prev, item]);
  // };
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Nếu đã có sản phẩm → tăng số lượng
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu chưa có → thêm mới
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity, // 👈 THÊM DÒNG NÀY
      }} // ✅ truyền thêm
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook cho tiện
export const useCart = () => useContext(CartContext);
