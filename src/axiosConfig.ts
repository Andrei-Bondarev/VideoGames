import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api"
});

export default axiosInstance;
