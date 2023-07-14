import { useState } from "react";

export function useForm(formEntry, onSubmit) {
    const initialValues = {};
    const initialErrors = {};
    const validationCheck = {};

    formEntry.forEach(({ name, value, validation }) => {
        initialValues[name] = value;
        initialErrors[name] = true;
        validationCheck[name] = validation;
    });

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name) => (changedValue) => {
        const isValid = validationCheck[name](changedValue);

        setErrors({
            ...errors,
            [name]: isValid,
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
            if (!errors[prop]) hasError = true;
        }

        if (hasError) {
            console.log("작성 항목 중 오류가 있습니다!");
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
