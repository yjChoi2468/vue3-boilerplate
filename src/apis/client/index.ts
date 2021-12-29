import axios, { AxiosRequestConfig } from "axios";
import { onRejected, onRequestFulfilled, onResponseFulfilled } from "@/utils/axios";
import { config } from "vuex-module-decorators";

axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;
axios.defaults.paramsSerializer = params => {
  const newParams = new URLSearchParams();
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        if (value.length) {
          newParams.append(key, value.join(","));
        }
      } else {
        newParams.append(key, value);
      }
    }
  });
  return newParams.toString();
};

const instance = axios.create();

instance.interceptors.request.use(onRequestFulfilled, onRejected);
instance.interceptors.response.use(onResponseFulfilled, onRejected);

export default instance;
