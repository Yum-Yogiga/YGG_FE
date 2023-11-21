import { React } from "react";
import { StyleSheet, TextInput } from "react-native";

export function FormTextInput({ type, error = false, style, ...props }) {
    const secureText = type === "password" || type === "password_verification";

    return <TextInput style={[error && styles.valueInvalid, style]} secureTextEntry={secureText} {...props} />;
}

const styles = StyleSheet.create({
    valueInvalid: {
        color: "red",
    },
});
