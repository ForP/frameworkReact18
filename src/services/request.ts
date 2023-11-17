import { http } from '@/utils/http';
import { ApiResponse } from "@/typings/api";

/**
 * 请求处理器：
 * @param url 
 * @param options 
 * @returns { success: boolean; message: string; data?: any; } 返回数据结构
 */
export const httpRequest = async (url: string, options = {}): Promise<ApiResponse> => {
    try {
        const res: ApiResponse = await http({
            url,
            ...options
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
            data: null
        }
    }
};
