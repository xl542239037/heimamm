
const KEY = "mmtoken";

// 保存token
export const setToken = (token) => {
    localStorage.setItem(KEY,token)
};
// 获取token
export const getToken = () => {
    // 取值只要 key即可
    return localStorage.getItem(KEY)
};
// 移除token
export const removeToken = () => {
    // 取值只要 key即可
     localStorage.removeItem(KEY)
};