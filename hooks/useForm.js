import { useState } from "react";

export function useForm(formEntry, onSubmit) {
    // 모든 값 초기화인 removeAll이 필요한가?
    // Submit의 async 필요

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
        // <Input onChangeText={handleChange(name)} /> 과 같이 사용
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
        // API 추가 필요
        const hasError = false;

        setIsLoading(true);

        for (const prop in errors) {
            if (!prop) hasError = true;
        }

        if (hasError) {
            console.log("작성 항목 중 오류가 있습니다!");
        } else {
            onSubmit();
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
