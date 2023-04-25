import axios from "axios";
import errorHandler from "./errorHandler";

const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(null, errorHandler);

export default axiosInstance;
