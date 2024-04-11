/**
 * 公用api文件
 */
import { httpRequest as request } from '@/services/request';

export default {
    // 获取在途危化品车辆数
    getChemicalVehicleCount(abortControllerId: string) {
        return request(`/iep-video-service/lawEnforcementRecorder/pageList`, {
            method: 'POST',
            abortControllerId,
        });
    },
};
