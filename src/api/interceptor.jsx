import axios from 'axios';
let time = 0;

const instance = axios.create({
  baseURL: "http://localhost:8080/todos",
});

instance.interceptors.request.use(
  (config) => {
    time = Date.now();
    console.log("Request", config)
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  });

instance.interceptors.response.use(
  (config) => {
    console.log("Response", config)
    console.log("time", Date.now()-time)
    return config;
  },
  (error) => {
    if(error.response && error.response.status === 404){
      window.location.href='/not-found'
    }
    if(error.response && error.response.status === 500){
      window.location.href='/hard-stop'
    }
    console.error("Response Error:", error);
    return Promise.reject(error);
  });

export default instance