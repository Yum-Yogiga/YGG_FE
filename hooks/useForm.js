import { useState } from "react";

export function useForm(formEntry, onSubmit) {
    const initialValues = {};
    const initialErrors = {};
    const validationCheck = {};

    formEntry.forEach(({ name, value, validation }) => {
        initialValues[name] = value ? value : "";
        initialErrors[name] = "";
        validationCheck[name] = validation;
    });

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name) => (changedValue) => {
        let errorMessage = "";
        if (name === "password_verification") {
            errorMessage = validationCheck["password_verification"](values["password"], changedValue);
        } else {
            errorMessage = validationCheck[name](changedValue);
        }
        setErrors({
            ...errors,
            [name]: errorMessage,
        });
        setValues({
            ...values,
            [name]: changedValue,
        });
    };

    const handleSubmit = () => {
        let hasError = false;

        setIsLoading(true);

        for (const prop in errors) {
            if (errors[prop]) hasError = true;
        }

        if (hasError) {
        } else {
            onSubmit(values);
            console.log("제출 완료");
        }

        setIsLoading(false);
    };

    return {
        values,
        errors,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
