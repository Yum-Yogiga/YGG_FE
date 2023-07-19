import { LoginForm } from "organism";
import { styled } from "styled-components";

export default function Login() {
    const logo = require("assets/orange.png");

    const formData = [
        {
            name: "userId",
            value: "",
            validation: (value) => {
                return "";
            },
        },
        {
            name: "password",
            value: "",
            validation: (value) => {
                return "";
            },
        },
    ];

    const handleSubmit = () => {
        console.warn("제출함");
    };

    return (
        <Container>
            <Logo source={logo} />
            <LoginForm formData={formData} onSubmit={handleSubmit} />
        </Container>
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
