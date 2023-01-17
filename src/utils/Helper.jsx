export const setSession = (key, value) => {
    key && value && sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key) => {
    let result = sessionStorage.getItem(key);
    return result ? JSON.parse(result) : result;
};
