import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestMethods, PureHttpRequestConfig } from "./types.d";
const env = import.meta.env;

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  baseURL: env.VITE_API_BASE_URL,
  // 请求超时时间
  timeout: 1000000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "APP-ID": env.VITE_APP_ID,
  },
  // responseType: "blob",
};

// 获取本地存储的 token 和过期时间
function getAuthToken() {
  const token = localStorage.getItem("authToken");
  const expiresAt = parseInt(localStorage.getItem("expiresAt") || "0", 10);

  // 判断 token 是否存在且未过期
  if (token && Date.now() < expiresAt) {
    return token;
  } else {
    // 如果 token 过期或不存在，移除本地存储的 token 信息
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiresAt");
    return null;
  }
}
class jobHttp {
  constructor() {
    this.httpInterceptorsRequest();
  }

  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    jobHttp.axiosInstance.interceptors.request.use(
      (config) => {
        const user: any = getAuthToken();
        if (user) {
          const token = JSON.parse(user).token;
          // 如果 token 存在，将其添加到请求头
          if (token) {
            config.headers["Authorization"] = `${token}`;
          }
          return config;
        }
        return config;
      },
      (error) => {
        // 处理请求错误
        return Promise.reject(error);
      }
    );
  }
  /** 响应拦截 */
  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig,
    } as PureHttpRequestConfig;
    // 确保 responseType 被包含在 config 中
    if (axiosConfig?.responseType) {
      config.responseType = axiosConfig.responseType;
    }
    // 单独处理自定义请求/响应回调
    return new Promise((resolve, reject) => {
      jobHttp.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /** 单独抽离的post工具函数 */
  public post<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("post", url, params, config);
  }

  /** 单独抽离的get工具函数 */
  public get<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("get", url, params, config);
  }
}

export const http = new jobHttp();
