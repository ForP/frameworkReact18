/**
 * 公用api文件
 */
import { httpRequest as request } from '@/services/request';

export default {
    // 获取在途危化品车辆数
    getChemicalVehicleCount(params: { orgCode: string }) {
        return request(`/nest/data/v/on/road/count`, { params });
    },
};
