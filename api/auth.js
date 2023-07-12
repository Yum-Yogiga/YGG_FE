export const signUp = ({ userId, password, email, nickname }) => {
    const signUpInfo = { userId, password, email, nickname };

    return request("sign-up", {
        method: "POST",
        body: JSON.stringify(signUpInfo),
    });
};
