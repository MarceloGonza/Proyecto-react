import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

let axiosIntance: AxiosInstance;

const createAxios = (baseURL: string) => {
  axiosIntance = axios.create({ baseURL });
};

const setupInterceptors = () => {
  axiosIntance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.get("token");
      if (token) {
        config.headers.set(`Autorization Bearer: ${token}`);
      }
      console.log(`Request made to: ${config.url}`);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosIntance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`Response from: ${response.config.url}`, {
        data: response.data,
        status: response.status,
      });
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(`Error response from: ${error.response.config.url}`);
      }
      {
        console.error(`Error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};

createAxios("https://rickandmorty.com/api");
setupInterceptors();

export const initAxios = () => {
  createAxios("https://rickandmorty.api.com/api");
  setupInterceptors();
  return axiosIntance;
};
