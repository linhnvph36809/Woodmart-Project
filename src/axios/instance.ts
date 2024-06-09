import axios from "axios";

const instance = axios.create({
    baseURL: 'https://woodmart.click/api/',
    timeout: 3000,
    headers: {'Content-Type': 'application', 'Accept': 'application/json'}
});
  
export default instance;