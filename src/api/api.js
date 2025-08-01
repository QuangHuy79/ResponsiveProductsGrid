// export async function registerUser(userData) {
//   console.log("Gửi dữ liệu đăng ký:", userData);
//   return new Promise(resolve => setTimeout(resolve, 1000));
// }

// Giải thích ngắn gọn:
// Cái hàm registerUser() bạn đang xài trong api.js chỉ là:

// ✅ Gửi console.log() để test

// ❌ KHÔNG gửi fetch() tới http://localhost:3001/users

// ❌ KHÔNG lưu vào db.json

export async function registerUser(userData) {
  console.log("Gửi dữ liệu đăng ký:", userData);

  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Đăng ký thất bại!");
  }

  return await response.json(); // hoặc trả về user vừa tạo
}
