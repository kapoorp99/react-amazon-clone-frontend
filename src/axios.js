import axios from "axios";
const instance = axios.create({
    baseURL: 'https://amazon-react-clone-backend.herokuapp.com',
});
export default instance