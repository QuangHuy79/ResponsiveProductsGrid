// src/api/productsApi.js
import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};
