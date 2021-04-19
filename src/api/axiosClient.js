import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token
  // config.headers = {
  //   authorization: "Bearer " + localStorage.getItem("token"),
  // };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
