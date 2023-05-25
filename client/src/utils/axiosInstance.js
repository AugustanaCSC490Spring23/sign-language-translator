import axios from "axios";
import errorHandler from "./errorHandler";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(null, errorHandler);

export default axiosInstance;
