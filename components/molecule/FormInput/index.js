import { React, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export function FormInput({ error, ...props }) {
    return (
        <View>
            <TextInput style={[styles.input, error ? styles.valueValid : styles.valueInvalid]} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    valueValid: {
        borderColor: "black",
    },
    valueInvalid: {
        borderColor: "red",
    },
});

export default FormInput;
