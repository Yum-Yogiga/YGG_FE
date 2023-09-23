import { styled } from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

import { LoginForm } from "organism";

export default function Signup() {
    const logo = require("assets/orange.png");

    const formData = [
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
            validation: (value) => {
                return "";
            },
        },
    ];

    const handleSubmit = async () => {};

    return (
        <KeyboardAvoidingView behavior="position">
            <Container>
                <Logo source={logo} />
                <LoginForm formData={formData} onSubmit={handleSubmit} />
            </Container>
        </KeyboardAvoidingView>
    );
}

const Container = styled.SafeAreaView`
    align-items: center;
`;

const Logo = styled.Image.attrs({
    resizeMode: "center",
})`
    max-width: 100%;
    height: 240px;
`;
