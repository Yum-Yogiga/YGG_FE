import { API_END_POINT } from "../constants/api";

export const request = async (url, options) => {
    const option = {
        ...options,
        mode: "cors",
        headers: {
            ...options.headers,
            "Content-Type": "application/json",
        },
    };

    return fetch(`${API_END_POINT}/${url}`, option)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status} Error`);
        })
        .catch((error) => alert(error.message));
};
