import { useState } from "react";
import { styled } from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";
import { useRouter } from "expo-router";

import { LoginForm } from "organism";
import { useForm } from "hooks";
import { signup } from "api";
import match from "constants/regex.js";

const idFormData = [
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
        name: "nickname",
        placeholder: "닉네임",
        validation: (value) => {
            if (value.length < 5 || value.length > 16) {
                return "닉네임은 5자~15자로 작성해주세요!";
            }
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
        placeholder: "이메일",
        validation: (value) => {
            if (!match(value, "email")) {
                return "이메일 형식이 올바르지 않습니다!";
            }
            return "";
        },
    },
    {
        name: "verification_code",
        placeholder: "데모버전에서는 전송버튼만 눌러주세요!",
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
    const [lockSignup, setLockSignup] = useState(true);

    const completeIdForm = () => {
        setShowIdVerif(false);
    };

    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(idFormData, completeIdForm);

    const handleGoNextFormButtonPress = () => {
        setShowIdFormError(true);
        handleSubmit();
    };

    const handleCancelSignupButtonPress = () => {
        router.push("/auth/login");
    };

    const signupFunc = async ({ email }) => {
        const { userId, password, nickname } = values;
        const { data } = await signup({ email, userId, password, nickname });
        if (data.success) router.back();
    };

    const {
        values: verifValues,
        errors: verifErrors,
        isLoading: verifIsLoading,
        handleChange: verifHandleChange,
        handleSubmit: verifHandleSubmit,
    } = useForm(verifFormData, signupFunc);

    const handleVerifSubmit = () => {
        setLockSignup(false);
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
                        submitText="인증코드 발급"
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
                        onVerifSendButtonPress={handleVerifSubmit}
                        lockSubmitButton={lockSignup}
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
    margin-top: 56px;
    height: 250px;
    justify-content: flex-end;
    padding-bottom: 40px;
`;

const Logo = styled.Image.attrs({
    resizeMode: "center",
})`
    max-width: 70%;
    height: 100px;
`;
