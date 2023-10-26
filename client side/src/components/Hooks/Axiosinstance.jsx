import axios from 'axios'
const Axiosinstance = axios.create({
    baseURL: 'https://assignment10-iota.vercel.app',
  });

  export default Axiosinstance;