// orderUtils.js
// export function calculateOrder({ quantity, shippingMethod }) {
//   const price = 1000;
//   const shipping = shippingMethod === "express" ? 20 : 10;
//   const subtotal = quantity * price;
//   const total = subtotal + shipping;

//   return { subtotal, shipping, total };
// }

// ======================================================================
/// ***** Thay calculateOrder tĩnh bằng dữ liệu thật từ CartContext *****
// ✅ Hàm mới dùng với dữ liệu từ giỏ hàng
export function calculateOrderFromCart(
  cartItems = [],
  shippingMethod = "standard"
) {
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const shipping = shippingMethod === "express" ? 20 : 10;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

// ======================================================================
/// ***** Trong trường hợp shipping Method có nhiều lựa chọn (nhiều hơn 2)*****

// export function calculateOrderFromCart(cartItems = [], shippingMethod = "standard") {
//   const subtotal = cartItems.reduce((sum, item) => {
//     return sum + item.price * item.quantity;
//   }, 0);

//   const shippingRates = {
//     standard: 10,
//     express: 20,
//     "same-day": 30,
//     pickup: 0,
//   };

//   const shipping = shippingRates[shippingMethod] ?? 10; // fallback nếu không khớp

//   const total = subtotal + shipping;

//   return { subtotal, shipping, total };
// }
