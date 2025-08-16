import axios from "axios";

const API = axios.create({
  baseURL: "https://lzycrayproject-backend.onrender.com/api/properties",
  withCredentials: true, // important when sending cookies or auth headers
});

// Get all properties
export const getListings = async () => {
  const { data } = await API.get("/");
  return data;
};

// Create a new property
export const createListing = async (formData) => {
  const { data } = await API.post("/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export default API;
