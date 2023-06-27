import { React, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export function FormInput({ inputValidation, placeholder, onChange, ...props }) {
    const [value, setValue] = useState("");
    const [inputValidity, setInputValidity] = useState(true);

    const handleChangeText = (e) => {
        const changedValue = e;
        if (inputValidation(changedValue)) {
            setInputValidity(true);
            setValue(changedValue);
            onChange(changedValue);
        } else {
            setInputValidity(false);
            setValue(changedValue);
        }
    };

    return (
        <View>
            <TextInput
                style={[styles.input, inputValidity ? styles.valueValid : styles.valueInvalid]}
                value={value}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                {...props}
            />
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
