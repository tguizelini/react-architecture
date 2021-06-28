const storage = localStorage

const get = async (key: string, defaultValue?: any) => {
    const result = await storage.getItem(key);
    return result ? JSON.parse(result) : defaultValue
}

const set = (key: string, value: any) => storage.setItem(key, value)
const remove = (key: string) => storage.removeItem(key)

const StorageHelper = { set, get, remove }

export default StorageHelper
