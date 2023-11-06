import { useState } from "react";
import { styled } from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

import { LoginForm } from "organism";

export default function Signup() {
    const logo = require("assets/logo.png");

    const [showEmailVerif, setShowEmailVerif] = useState(false);

    const signupFormData = [
        {
            name: "userId",
            placeholder: "ID",
            validation: (value) => {
                return "";
            },
        },
        {
            name: "nickname",
            placeholder: "닉네임",
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
        {
            name: "password_verification",
            placeholder: "비밀번호 확인",
            validation: (password, changedValue) => {
                if (password !== changedValue) return "비밀번호와 비밀번호 재확인이 일치하지 않습니다";
                return "";
            },
        },
    ];

    const emailVerifFormData = [
        {
            name: "email",
            placeholder: "이메일주소",
            validation: (value) => {
                return "";
            },
        },
        {
            name: "verification code",
            placeholder: "인증 코드",
            validation: (value) => {
                return "";
            },
        },
    ];

    const handleSubmit = async () => {
        setShowEmailVerif(!showEmailVerif);
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <Container>
                <LogoSpace>
                    <Logo source={logo} />
                </LogoSpace>
                {showEmailVerif || (
                    <LoginForm formData={signupFormData} onSubmit={handleSubmit} submitText="이메인 인증" />
                )}
                {showEmailVerif && (
                    <LoginForm formData={emailVerifFormData} onSubmit={handleSubmit} submitText="인증 완료" />
                )}
            </Container>
        </KeyboardAvoidingView>
    );
}

const Container = styled.SafeAreaView`
    align-items: center;
`;

const LogoSpace = styled.View`
    height: 250px;
    justify-content: flex-end;
    padding-bottom: 48px;
`;

const Logo = styled.Image.attrs({
    resizeMode: "center",
})`
    max-width: 70%;
    height: 100px;
`;
