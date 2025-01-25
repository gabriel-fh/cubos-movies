import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: import.meta.env.VITE_API_KEY,
      language: "pt-BR",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
