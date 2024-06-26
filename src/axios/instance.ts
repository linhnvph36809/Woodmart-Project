import axios from "axios";

const instance = axios.create({
    baseURL: 'https://woodmart.click/api/',
    timeout: 10000,
    headers: {'Content-Type': 'multipart/form-data', 'Accept': 'application/json'}
});
  
export default instance;