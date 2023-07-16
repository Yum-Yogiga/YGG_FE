import { React } from "react";
import { StyleSheet, TextInput } from "react-native";

export function FormInput({ error, style, ...props }) {
    return <TextInput style={[styles.input, error && styles.valueInvalid, style]} {...props} />;
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
    },
    valueInvalid: {
        color: "red",
    },
});

export default FormInput;
