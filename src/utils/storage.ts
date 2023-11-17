export default {
    set(name: string, content: string | object) {
        if (!name) return;
        if (content instanceof Object) {
            content = JSON.stringify(content);
        }
        localStorage.setItem(name, content);
    },
    /**
     * 获取本地缓存
     * @param key 缓存key值
     * @param isObj 获取值是否为对象
     */
    get(
        key: string,
        options?: {
            isObj?: boolean;
            initialValue?: any;
        },
    ) {
        const { isObj, initialValue } = options ?? {};
        const value = localStorage.getItem(key);
        if (!value) {
            return initialValue;
        }
        return isObj && value ? JSON.parse(value) : value;
    },
    /**
     * 清除本地缓存
     * @param keys 数组缓存keys值，array[string]
     */
    remove(keys: string[]) {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            localStorage.removeItem(key);
        }
    },
    clear() {
        localStorage.clear();
    },
};
