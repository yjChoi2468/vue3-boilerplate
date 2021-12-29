import { AxiosRequestConfig } from "axios";
import { StatusCodes } from "http-status-codes";

export const onRequestFulfilled = (config: AxiosRequestConfig) => {};

export const onResponseFulfilled = (config: AxiosRequestConfig) => {};

export const onRejected = (error: any) => {
  if (error.response) {
    switch (error.response.status) {
      case StatusCodes.UNAUTHORIZED: // 401
        break;
      case StatusCodes.FORBIDDEN: // 403
        break;
      case StatusCodes.NOT_FOUND: // 404
        break;
      default:
        break;
    }
  }
  throw new Error(error);
};
