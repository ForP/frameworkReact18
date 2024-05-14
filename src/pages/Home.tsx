import React, { useEffect } from 'react';
import globalUtils from '@/utils/global';
import cancelHttpInstance from '@/utils/cancelHttp';
import Api from '@/services/index';

export default function Home() {
    const abortControllerId = globalUtils.createUuid();
    useEffect(() => {
        Api.Global.getChemicalVehicleCount(abortControllerId);
        return () => {
            cancelHttpInstance.abort(abortControllerId);
        };
    }, []);

    function onCancelApi() {
        cancelHttpInstance.abort(abortControllerId);
    }

    return (
        <div>
            首页
            <button onClick={onCancelApi}>取消</button>
        </div>
    );
}
