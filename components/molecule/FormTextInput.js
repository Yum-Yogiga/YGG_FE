import { React } from "react";
import { StyleSheet, TextInput } from "react-native";

export function FormTextInput({ error, style, ...props }) {
    return <TextInput style={[error && styles.valueInvalid, style]} {...props} />;
}

const styles = StyleSheet.create({
    valueInvalid: {
        color: "red",
    },
});
