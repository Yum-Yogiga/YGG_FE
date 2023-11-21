import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styled } from "styled-components/react";

import { FormTextInput } from "molecule";

export const LoginForm = ({
    formData,
    values,
    errors,
    handleChange,
    isLoading = false,
    onSubmitButtonPress,
    submitText = "로그인",
    showCancelButton = false,
    onCancelButtonPress,
    cancelText = "취소",
    displayError = "false",
    ...props
}) => {
    const getInputStyle = (index) => {
        const formInputStyle = [];
        index == 0 && formInputStyle.push(styles.firstInput);
        index == formData.length - 1 && formInputStyle.push(styles.lastInput);
        return formInputStyle;
    };

    const getIconShape = (name) => {
        switch (name) {
            case "email":
            case "userId":
            case "nickname":
                return "user";
            case "password":
            case "password_verification":
                return "lock";
            case "verification_code":
                return "lock";
        }
    };

    return (
        <Container {...props}>
            <FormBody>
                {formData.map(({ name, placeholder }, index) => (
                    <FormInput key={name} style={getInputStyle(index)}>
                        <IconSpace>
                            <EvilIcons name={getIconShape(name)} size={30} color="black" />
                        </IconSpace>
                        <TextInputLine
                            type={name}
                            value={values[name]}
                            error={displayError && errors[name].length > 0}
                            onChangeText={handleChange(name)}
                            placeholder={placeholder}
                        />
                        {name == "email" && (
                            <VerifCodeSendButton>
                                <Text>전송</Text>
                            </VerifCodeSendButton>
                        )}
                    </FormInput>
                ))}
            </FormBody>
            <ErrorMessageView>
                {displayError &&
                    formData.map(({ name }) => {
                        const message = errors[name];
                        if (message.length > 0) return <ErrorMessage key={name}>*{message}</ErrorMessage>;
                    })}
            </ErrorMessageView>
            <ButtonSpace>
                {isLoading ? (
                    <ActivityIndicator size="large" color="gray" />
                ) : (
                    (
                        showCancelButton && (
                            <CancelButton onPress={onCancelButtonPress}>
                                <Text style={{ color: "black" }}>{cancelText}</Text>
                            </CancelButton>
                        )
                    )(
                        <SubmitButton onPress={onSubmitButtonPress}>
                            <Text style={{ color: "white" }}>{submitText}</Text>
                        </SubmitButton>
                    )
                )}
            </ButtonSpace>
        </Container>
    );
};

const styles = StyleSheet.create({
    firstInput: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    lastInput: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    shrinkedWidthButton: {
        width: "45%",
    },
    disabledButton: {
        backgroundColor: "#D9D9D9",
    },
});

const Container = styled.View`
    width: 320px;
    justify-content: center;
`;

const FormBody = styled.View`
    border-radius: 8px;
    border: 1px solid black;
`;

const FormInput = styled.View`
    width: 318px;
    height: 52px;
    padding: 10px;

    flex-direction: row;
    align-items: center;

    border: 1px solid #d9d9d9;
    background-color: white;
`;

const IconSpace = styled.View`
    width: 36px;
    height: 36px;

    justify-content: center;
    align-items: center;
`;

const TextInputLine = styled(FormTextInput)`
    flex: 1;
`;

const VerifCodeSendButton = styled.TouchableOpacity`
    width: 48px;
    height: 30px;

    justify-content: center;
    align-items: center;

    border: 1px solid #d9d9d9;
    border-radius: 4px;
`;

const ErrorMessageView = styled.View`
    margin: 6px 0px;
`;

const ErrorMessage = styled.Text`
    margin: 2px 0px;
    color: red;
    font-size: 12px;
`;

const ButtonSpace = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const CancelButton = styled.TouchableOpacity`
    width: 45%;
    height: 52px;
    padding-left: 5%;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    height: 52px;

    justify-content: center;
    align-items: center;

    border-radius: 8px;
    background-color: #ff8303;

    color: white;
`;
