import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7265/api", // Base URL should match your backend
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error; // Propagate the error for further handling
  }
};

export default api;
