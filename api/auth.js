import { request } from "./request";

export const signUp = ({ userId, password, email, nickname }) => {
    const signUpInfo = { userId, password, email, nickname };
    console.alert(JSON.stringify(signUpInfo));
    return request("sign-up", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(signUpInfo),
    });
};
