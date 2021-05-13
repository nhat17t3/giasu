import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://manage-tutor-123.herokuapp.com",
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use( (config) => {
  //handle token
  config.headers = { Authorization: 'Bearer ' + localStorage.getItem('token') }; 
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
