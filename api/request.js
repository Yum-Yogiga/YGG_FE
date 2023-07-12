import { API_END_POINT } from "../constants/api";

export const request = async (url, options) => {
    const option = options;
    option.headers = JSON.stringify({
        ...option.headers,
        accept: "*/*",
        "Content-Type": "application/json",
    });

    return fetch(`${API_END_POINT}/${url}`, option)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`${res.status} Error`);
        })
        .catch((e) => alert(e.message));
};
