import axios from 'axios'


export const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });
