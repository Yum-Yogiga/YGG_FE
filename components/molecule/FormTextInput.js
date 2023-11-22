import { React } from "react";
import { StyleSheet, TextInput } from "react-native";

export function FormTextInput({ type, error = false, style, ...props }) {
    const secureText = type === "password" || type === "password_verification";
    const inputMode = type;

    return (
        <TextInput
            style={[error && styles.valueInvalid, style]}
            secureTextEntry={secureText}
            inputMode={type === "email" ? "email" : "none"}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    valueInvalid: {
        color: "red",
    },
});
