const storage = localStorage

const get = (key: string, defaultValue?: any) => {
    const result = storage.getItem(key);
    return result ? result : defaultValue
}

const set = (key: string, value: any) => storage.setItem(key, value)
const remove = (key: string) => storage.removeItem(key)

const StorageHelper = { set, get, remove }

export default StorageHelper