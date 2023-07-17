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
