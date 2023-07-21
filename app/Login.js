import { LoginForm } from "organism";
import { styled } from "styled-components/native";

import { signIn } from "api";
import { KeyboardAvoidingView } from "react-native";

export default function Login() {
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
            name: "password",
            placeholder: "비밀번호",
            validation: (value) => {
                return "";
            },
        },
    ];

    const handleSubmit = async (value) => {
        const response = await signIn(value).then((res) => JSON.stringify(res));
    };

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
    height: 320px;
`;
