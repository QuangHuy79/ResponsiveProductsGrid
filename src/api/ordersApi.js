// src/api/ordersApi.js

export const submitOrder = async (orderData) => {
  const response = await fetch("http://localhost:3001/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Đặt hàng thất bại");
  }

  return await response.json();
};
