import axios from "axios";

const inventoryApi = axios.create({
  baseURL: "http://localhost:8000/dashboard/api/v1/general/",
});
export const getAllProducts = () => inventoryApi.get("/");

export const addProduct = (product) => inventoryApi.post("/", product);

export const deleteProduct = async (key) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/dashboard/api/v1/general/${key}/`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
