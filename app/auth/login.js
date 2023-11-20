import { LoginForm } from "organism";
import { styled } from "styled-components/native";
import { useRouter, Link } from "expo-router";

import { signIn } from "api";
import { KeyboardAvoidingView } from "react-native";

export default function Login() {
    const logo = require("assets/logo.png");

    const router = useRouter();

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
        /*
        const response = await signIn(value).then((res) => JSON.stringify(res));
        */
        router.push("/setkeywords/optionselect");
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <Container>
                <LogoSpace>
                    <Logo source={logo} />
                </LogoSpace>
                <LoginForm formData={formData} onSubmit={handleSubmit} />
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
`;

const SignupText = styled.Text`
    margin: 6px 0;
    text-align: center;
`;

const SignupLink = styled(Link)`
    color: #ff8303;
`;
