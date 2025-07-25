// orderUtils.js
export function calculateOrder({ quantity, shippingMethod }) {
  const price = 1000;
  const shipping = shippingMethod === "express" ? 20 : 10;
  const subtotal = quantity * price;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}
