import { request } from "./request";

export const signUp = async ({ userId, password, email, nickname }) => {
    const signUpInfo = { userId, password, email, nickname };

    try {
        const { token, refreshToken } = await request("sign-up", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(signUpInfo),
        });
        return { token, refreshToken };
    } catch (e) {
        console.error("회원가입 API 오류");
    }
};

export const signIn = async ({ userId, password }) => {
    const signInInfo = { userId, password };

    try {
        const { token, refreshToken } = await request("sign-in", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(signInInfo),
        });
        return { token, refreshToken };
    } catch (e) {
        console.error("로그인 API 오류");
    }
};
