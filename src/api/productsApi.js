// src/api/productsApi.js
import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};

// ***** Dùng hàm này để phân trang *****

export const getAllProductsByCategory = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`);
};

// ***** Dùng đủ CRUD (Create, Read, Update, Delete) *****

// import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com/products";

// export const getAllProducts = () => axios.get(BASE_URL);
// export const getProductById = (id) => axios.get(`${BASE_URL}/${id}`);
// export const createProduct = (data) => axios.post(BASE_URL, data);
// export const updateProduct = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
// export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
