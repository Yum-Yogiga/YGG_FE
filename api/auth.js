import { API_END_POINT } from "../constants/api";
import axios from "axios";

export const signin = async ({ userId, password }) => {
    try {
        const result = await axios.post(`${API_END_POINT}/sign-up`, { userId, password });
        return result;
    } catch (e) {
        console.error("로그인 API 오류");
    }
};

export const signup = async ({ userId, password, email, nickname }) => {
    try {
        const result = await axios.post(`${API_END_POINT}/sign-up`, { userId, password, email, nickname });
        return result;
    } catch (e) {
        console.error("회원가입 API 오류");
    }
};
