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
    Authorization:
      "eyJraWQiOiJrMiIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJoYWNkZXNpZ24iLCJhdWQiOiJoYWNjbGUiLCJleHAiOjE3Mjc2Nzk3MzgsImp0aSI6IkpBSk9DTkZ3eDVnY01GZFNBOFdkVlEiLCJpYXQiOjE3MjY2NDI5MzgsInN1YiI6IntcImZyb21cIjpcIk1FTUJFUlBDXCIsXCJpZFwiOjUxNjg5ODU1NDkwNDY0MCxcImlkZW50aXR5XCI6XCJNRU1CRVJcIixcImxhbmd1YWdlXCI6XCJlblwiLFwibWVtYmVySWRcIjo1MTY4OTg1NTQ5MDQ2MDgsXCJ0eXBlXCI6XCJNRU1CRVJQQ1wifSJ9.tM7tI7nnAhgM8_Jk6_O2twu-eK5siAZVF8BUT_DTU_gk78k4KGDdI3xFfwpCeoE5zcfHoJ2uSfm3ocz8rkv9fWsSHgxCj7APMl4xNEx438_6ADNFHjb7jcDhKRC2Gb7dSJr3Irojh-ffftyqm5L1pG6AvVPTZrekCrKJTVAFAtyYERfBCJaDomC6sD-E710UtLwte779z6Q9uvD0-DBOf1Mk07agf3zA7EsMrsZX-5nxKuweB-f-Tt0PsUmwxAVtvEHQsLVC5t_sJeiukD0oFNzGT_Yyqgxo9p7a6da_DuLhlObl2uiLk09nIeqJZOKWAjkVoYRDlqx_rqPknkTnfA",
  },
  // responseType: "blob",
};

class jobHttp {
  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  /** 请求拦截 */
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
