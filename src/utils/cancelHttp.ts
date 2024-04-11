class CancelHttp {
    public toCancelList: Map<string, AbortController>;
    constructor() {
        this.toCancelList = new Map();
    }
    add(key: string, instance: AbortController) {
        this.toCancelList.set(key, instance);
    }
    delete(key: string) {
        this.toCancelList.delete(key);
    }
    clear() {
        this.toCancelList.clear();
    }
    has(key: string) {
        return this.toCancelList.has(key);
    }
    abort(key: string) {
        const controller = this.toCancelList.get(key);
        if (!controller) {
            console.error('cannot find abortController, pls check the key');
            return;
        }
        controller.abort();
    }
    abortAll() {
        try {
            for (const item of this.toCancelList) {
                if (!item?.length) {
                    continue;
                }
                const controller = item[1];
                controller.abort();
            }
        } catch (error) {
            console.error('CancelHttp abortAll get error', error);
        }
    }
}

export default new CancelHttp();
