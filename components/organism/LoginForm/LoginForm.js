import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

import { useForm } from "hooks";
import { FormTextInput } from "molecule";

export const LoginForm = ({
    formData,
    onSubmit,
    submitText = "로그인",
    onCancel,
    cancelText = "취소",
    autoErrorDisplay = false,
    ...props
}) => {
    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(formData, onSubmit);
    const [showError, setShowError] = useState(autoErrorDisplay);

    const handlePressSubmit = () => {
        if (!showError) setShowError(true);
        handleSubmit();
    };

    const handlePressCancel = () => {
        onCancel();
    };

    const getInputStyle = (index) => {
        const formInputStyle = [styles.formInput];
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
        <View style={styles.container} {...props}>
            <View style={styles.formBody}>
                {formData.map(({ name, placeholder }, index) => (
                    <View key={name} style={getInputStyle(index)}>
                        <View style={styles.icon}>
                            <EvilIcons name={getIconShape(name)} size={30} color="black" />
                        </View>
                        <FormTextInput
                            style={styles.textInput}
                            placeholder={placeholder}
                            value={values[name]}
                            error={showError && errors[name]}
                            onChangeText={handleChange(name)}
                            secureTextEntry={name === "password" || name === "password_verification"}
                        />
                        {name == "email" && (
                            <TouchableOpacity style={styles.verifCodeSendButton}>
                                <Text style={{ color: "#707070" }}>전송</Text>
                            </TouchableOpacity>
                        )}
                    </View>
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
            <View style={styles.buttonSpace}>
                {onCancel && (
                    <TouchableOpacity
                        style={[styles.cancelButton, isLoading && styles.disabledButton]}
                        disabled={isLoading}
                        onPress={handlePressCancel}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="large" color="black" />
                        ) : (
                            <Text style={{ color: "black" }}>{cancelText}</Text>
                        )}
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={[styles.submitButton, onCancel && styles.submitButton2, isLoading && styles.disabledButton]}
                    disabled={isLoading}
                    onPress={handlePressSubmit}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color="gray" />
                    ) : (
                        <Text style={styles.buttonText}>{submitText}</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
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
    icon: {
        width: 36,
        height: 36,
        paddingBottom: 4,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
    },
    textInput: {
        flex: 1,
    },
    errorMessageView: {
        marginVertical: 6,
    },
    errorMessage: {
        marginVertical: 2,
        color: "red",
        fontSize: 12,
    },
    buttonSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
        height: 52,
        paddingLeft: "5%",
        borderRadius: 8,
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 52,
        borderRadius: 8,
        backgroundColor: "#FF8303",
    },
    submitButton2: {
        width: "45%",
    },
    disabledButton: {
        backgroundColor: "#D9D9D9",
    },
    buttonText: {
        color: "white",
    },
    verifCodeSendButton: {
        height: 30,
        width: 48,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#d9d9d9",
        alignItems: "center",
        justifyContent: "center",
    },
});
