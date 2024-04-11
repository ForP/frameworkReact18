import globalUtils from '@/utils/global';
import { http } from '@/utils/http';
import cancelHttpInstance from '@/utils/cancelHttp';
import { ApiResponse } from '@/typings/api';

/**
 * 请求处理器：
 * @param url
 * @param options
 * @param options.abortControllerId {?} 请求取消控制器id
 * @returns { success: boolean; message: string; data?: any; } 返回数据结构
 */
export const httpRequest = async (url: string, options: object = {}): Promise<ApiResponse> => {
    const controller = new AbortController();
    const uuid = options?.['abortControllerId'] ?? globalUtils.createUuid();
    cancelHttpInstance.add(uuid, controller);
    try {
        const res: ApiResponse = await http({
            url,
            signal: controller.signal,
            ...options,
        });
        if (!res?.success) {
            throw new Error('httpRequest get nothing from server!');
        } else {
            return res;
        }
    } catch (error) {
        console.error('httpRequest error: ', error);
        return {
            success: false,
            message: '服务无响应数据',
            data: null,
        };
    } finally {
        cancelHttpInstance.delete(uuid);
    }
};
