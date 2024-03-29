import { API_END_POINT } from "../constants/api";
import axios from "axios";

export const signin = async ({ userId, password }) => {
    try {
        const result = await axios({
            method: "post",
            url: `${API_END_POINT}/sign-in`,
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            },
            data: {
                userId,
                password,
            },
        }).catch((e) => console.log(`~ ~ auth.js: 17 ~ ~${e}`));
        return result;
    } catch (e) {
        console.error(e);
    }
};

export const signup = async ({ userId, password, email, nickname }) => {
    try {
        const result = await axios({
            method: "post",
            url: `${API_END_POINT}/sign-up`,
            data: {
                userId,
                password,
                email,
                nickname,
            },
        });
        return result;
    } catch (e) {
        console.error(e);
    }
};
