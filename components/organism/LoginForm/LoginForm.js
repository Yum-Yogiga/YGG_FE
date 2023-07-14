import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useForm } from "hooks";
import { FormInput } from "molecule";

export const LoginForm = ({ formData, onSubmit, ...props }) => {
    const { values, errors, isLoading, handleChange, handleSubmit } = useForm(formData, onSubmit);

    return (
        <View style={styles.container} {...props}>
            <View style={styles.formBody}>
                {formData.map(({ name }, index) => (
                    <FormInput
                        style={[styles.formInput, formData.length == index + 1 && styles.lastInput]}
                        key={name}
                        placeholder={name}
                        value={values[name]}
                        error={errors[name]}
                        onChangeText={handleChange(name)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} disabled={isLoading} onPress={handleSubmit}>
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
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        shadowColor: "black",
        elevation: 2,
    },
    formInput: {
        width: 318,
        height: 52,
        margin: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
    },
    lastInput: {
        borderBottomWidth: 0,
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        height: 52,
        marginVertical: 12,
        borderRadius: 8,
        backgroundColor: "#FF8303",
    },
    buttonText: {
        color: "white",
    },
    signupText: {
        textAlign: "center",
    },
    signupLink: {
        color: "#FF8303",
    },
});
