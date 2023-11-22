import { useState } from "react";
import { LoginForm } from "organism";
import { styled } from "styled-components/native";
import { useRouter, Link } from "expo-router";
import { useForm } from "hooks";

import { useAuth } from "../context/AuthContext";
import { signIn } from "api";
import { KeyboardAvoidingView } from "react-native";

const loginFormData = [
    {
        name: "userId",
        placeholder: "ID",
        validation: (value) => {
            if (value.length < 5 || value.length > 16) {
                return "아이디는 5자~15자로 작성해주세요!";
            }
            if (!match(value, "userId")) return "아이디는 오직 영문, 숫자로 구성돼야합니다!";
            return "";
        },
    },
    {
        name: "password",
        placeholder: "비밀번호",
        validation: (value) => {
            if (value.length < 5 || value.length > 16) {
                return "비밀번호는 5자~15자로 작성해주세요!";
            }
            if (!match(value, "password")) {
                return "비밀번호는 최소 한글자의 특수기호를 포함해야합니다!";
            }
            return "";
        },
    },
];

export default function Login() {
    const logo = require("assets/logo.png");
    const router = useRouter();
    const { onLogin, authState } = useAuth();

    const [showLoginFormError, setShowLoginFormError] = useState(false);

    const login = async ({ userId, password }) => {
        const result = await onLogin({ userId, password }).catch();
        if (result) {
            router.push("/setkeywords/optionselect");
        }
    };

    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(loginFormData, login);

    const handleSubmitButtonPress = async (value) => {
        handleSubmit();
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <Container>
                <LogoSpace>
                    <Logo source={logo} />
                </LogoSpace>
                <LoginForm
                    formData={loginFormData}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    isLoading={isLoading}
                    onSubmitButtonPress={handleSubmitButtonPress}
                    submitText="로그인"
                    displayError={showLoginFormError}
                />
                <SignupText>
                    회원이 아니신가요? <SignupLink href="./signup">회원가입하기</SignupLink>
                </SignupText>
            </Container>
        </KeyboardAvoidingView>
    );
}

const Container = styled.SafeAreaView`
    align-items: center;
`;

const LogoSpace = styled.View`
    height: 350px;
    justify-content: flex-end;
    padding-bottom: 48px;
`;

const Logo = styled.Image.attrs({
    resizeMode: "center",
})`
    max-width: 70%;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

const SignupText = styled.Text`
    margin: 6px 0;
    text-align: center;
`;

const SignupLink = styled(Link)`
    color: #ff8303;
`;
