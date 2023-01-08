import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/products";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const agent = {
  getAll: async (url) => {
    let responseData = [];
    await axiosInstance
      .get(url)
      .then((res) => {
        responseData = res.data;
      })
      .catch((err) => {
        console.log("Error", err);
        throw err;
      });

    return responseData;
  },getByCategory: async () => {
    let response = {};
    await axiosInstance.get(`/categories`).then((res) => {
      response = res.data;
    });
    if (response == null) {
      throw "404 data not found!!";
    }
    return response;
  },
};
export default agent;