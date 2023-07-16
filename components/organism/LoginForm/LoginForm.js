import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useForm } from "hooks";
import { FormInput } from "molecule";

export const LoginForm = ({ formData, onSubmit, autoErrorDisplay = false, ...props }) => {
    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(formData, onSubmit);
    const [showError, setShowError] = useState(autoErrorDisplay);

    const handlePressSubmitButton = () => {
        if (!showError) setShowError(true);
        handleSubmit();
    };

    const inputEnd = formData.length - 1;

    return (
        <View style={styles.container} {...props}>
            <View style={styles.formBody}>
                {formData.map(({ name }, index) => (
                    <FormInput
                        style={[
                            styles.formInput,
                            index == 0 && styles.firstInput,
                            index == inputEnd && styles.lastInput,
                        ]}
                        key={name}
                        placeholder={name}
                        value={values[name]}
                        error={showError && errors[name]}
                        onChangeText={handleChange(name)}
                    />
                ))}
            </View>
            <View style={styles.errorMessageView}>
                {showError &&
                    formData.map(({ name }) => {
                        const message = errors[name];
                        if (message.length > 0)
                            return (
                                <Text style={styles.errorMessage} key={name}>
                                    *{message}
                                </Text>
                            );
                    })}
            </View>
            <TouchableOpacity style={styles.submitButton} disabled={isLoading} onPress={handlePressSubmitButton}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>
                회원이 아니신가요? <Text style={styles.signupLink}>회원가입하기</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 320,
        justifyContent: "center",
    },
    formBody: {
        borderRadius: 8,
        borderColor: "#D9D9D9",
        shadowColor: "black",
        elevation: 2,
    },
    formInput: {
        width: 318,
        height: 52,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "#D9D9D9",
        backgroundColor: "white",
    },
    firstInput: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    lastInput: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    errorMessageView: {
        marginVertical: 6,
    },
    errorMessage: {
        marginVertical: 2,
        color: "red",
        fontSize: 12,
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        height: 52,
        borderRadius: 8,
        backgroundColor: "#FF8303",
    },
    buttonText: {
        color: "white",
    },
    signupText: {
        marginVertical: 6,
        textAlign: "center",
    },
    signupLink: {
        color: "#FF8303",
    },
});
