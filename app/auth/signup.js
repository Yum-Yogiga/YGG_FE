import { useState } from "react";
import { styled } from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";
import { useRouter } from "expo-router";

import { LoginForm } from "organism";
import { useForm } from "hooks";

const idFormData = [
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

const verifFormData = [
    {
        name: "email",
        placeholder: "****@****.com",
        validation: (value) => {
            return "";
        },
    },
    {
        name: "verification_code",
        placeholder: "인증번호를 입력해주세요",
        validation: (value) => {
            return "";
        },
    },
];

export default function Signup() {
    const logo = require("assets/logo.png");
    const router = useRouter();

    const [showIdVerif, setShowIdVerif] = useState(true);
    const [showIdFormError, setShowIdFormError] = useState(false);
    const [showVerifFormError, setShowVerifFormError] = useState(false);

    const completeIdForm = () => {};

    const loginFunc = () => {};

    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(idFormData, completeIdForm);

    const handleGoNextFormButtonPress = () => {
        handleSubmit();
        setShowIdVerif(false);
    };

    const handleCancelSignupButtonPress = () => {
        router.push("/auth/login");
    };

    const {
        values: verifValues,
        errors: verifErrors,
        isLoading: verifIsLoading,
        handleChange: verifHandleChange,
        handleSubmit: verifHandleSubmit,
    } = useForm(verifFormData, loginFunc);

    const handleVerifSubmit = () => {
        console.log("인증 확인 모달");
    };

    const handleSignupButtonPress = () => {
        verifHandleSubmit();
    };

    const handleCancelEmailVerifButtonPress = () => {
        setShowIdVerif(true);
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <Container>
                <LogoSpace>
                    <Logo source={logo} />
                </LogoSpace>
                {showIdVerif ? (
                    <LoginForm
                        formData={idFormData}
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                        isLoading={isLoading}
                        onSubmitButtonPress={handleGoNextFormButtonPress}
                        submitText="이메일 인증"
                        showCancelButton={true}
                        onCancelButtonPress={handleCancelSignupButtonPress}
                        cancelText="취소"
                        displayError={showIdFormError}
                    />
                ) : (
                    <LoginForm
                        formData={verifFormData}
                        values={verifValues}
                        errors={verifErrors}
                        handleChange={verifHandleChange}
                        isLoading={verifIsLoading}
                        onSubmitButtonPress={handleSignupButtonPress}
                        submitText="회원가입 완료"
                        showCancelButton={true}
                        onCancelButtonPress={handleCancelEmailVerifButtonPress}
                        cancelText="취소"
                        displayError={showVerifFormError}
                    />
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
