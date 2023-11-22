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
            return "";
        },
    },
    {
        name: "password",
        placeholder: "비밀번호",
        validation: (value) => {
            return "";
        },
    },
];

export default function Login() {
    const logo = require("assets/logo.png");
    const router = useRouter();
    const { onLogin } = useAuth();

    const [showLoginFormError, setShowLoginFormError] = useState(false);

    const login = async () => {
        const result = await onLogin(email, password);
        if (result && result.error) {
            alert(result.msg);
        }
    };

    const dummyLogin = () => {};

    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(loginFormData);

    const handleSubmitButtonPress = async (value) => {
        handleSubmit;
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
