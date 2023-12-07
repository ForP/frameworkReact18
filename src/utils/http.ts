import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import storage from '@/utils/storage';

interface RequestConfig extends AxiosRequestConfig {
    token?: boolean; // 接口是否需要携带token
}

const http: AxiosInstance = axios.create({
    baseURL: '/server/',
    timeout: 5000, //请求超时时间
});
// 添加请求拦截器
http.interceptors.request.use(
    (config: RequestConfig): any => {
        const { token, ...rest } = config;
        const Authorization = token ? storage.get('userToken', { initialValue: '' }) : '';

        return {
            ...rest,
            headers: {
                ...rest.headers,
                Authorization,
            },
        };
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 添加响应拦截器
http.interceptors.response.use(
    (response: AxiosResponse): any => {
        const { status, data: serverResponse } = response;
        if (!status.toString().startsWith('2')) {
            return {
                success: false,
                message: '请求失败',
            };
        }
        // 2xx 范围内的状态码都会触发该函数。
        if (!serverResponse) {
            return {
                success: false,
                message: '服务端返回空数据',
            };
        }
        if (
            ['string', 'number'].includes(typeof serverResponse) ||
            serverResponse instanceof Array
        ) {
            // 服务端返回字符串/数字/数组，拼接前端响应数据结构
            return {
                success: true,
                data: serverResponse,
            };
        }
        const { success, message, data } = serverResponse;
        let result: {
            success: boolean;
            data?: any;
            message?: string;
        } = {
            message,
            success: true,
            data,
        };
        if (!success) {
            result = {
                success: false,
                message: message || '服务出错',
            };
        }
        return result;
    },
    (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    },
);

export { http };
