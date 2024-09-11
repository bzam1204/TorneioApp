import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://basquetecansadoapi20240902180725.azurewebsites.net/'
    baseURL: "http://localhost:5144/",
    
});

export default axiosInstance;
