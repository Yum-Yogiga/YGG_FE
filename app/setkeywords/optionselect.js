import { View } from "react-native";
import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

import { useForm } from "hooks";
import { DistanceInput, IconSelectInput } from "molecule";

export default function OptionSelect() {
    const router = useRouter();

    const formData = [
        {
            name: "distance",
            value: 0.5,
            validation: (value) => {
                const availableAnswers = [0.5, 1.0, 1.5, 2.0];
                const result = availableAnswers.includes(value) ? "" : "거리: 유효한 답이 아닙니다";
                return result;
            },
        },
        {
            name: "price",
            value: "cheap",
            validation: (value) => {
                const availableAnswers = ["cheap", "moderate", "expensive"];
                const result = availableAnswers.includes(value) ? "" : "가격: 유효한 답이 아닙니다";
                return result;
            },
        },
        {
            name: "waiting",
            value: "no waiting",
            validation: (value) => {
                const availableAnswers = ["no waiting", "moderate waiting", "long waiting"];
                const result = availableAnswers.includes(value) ? "" : "웨이팅: 유효한 답이 아닙니다";
                return result;
            },
        },
    ];

    const onSubmit = (values) => {
        const { distance, price, waiting } = values;
        router.push({ pathname: "./keywordselect", params: { distance: distance, price: price, waiting: waiting } });
    };

    const { values, errors, handleChange, handleSubmit } = useForm(formData, onSubmit);
    const [showError, setShowError] = useState(true);

    const handlePressSubmit = () => {
        if (!showError) setShowError(true);
        handleSubmit();
    };

    return (
        <Container>
            <>
                <View>
                    <Label>거리</Label>
                    <DistanceInput value={values["distance"]} onChange={handleChange("distance")} />
                </View>
                <View style={{ marginTop: 64 }}>
                    <Label>가격</Label>
                    <IconSelectInput
                        entrySetName="price"
                        iconSize={56}
                        value={values["price"]}
                        onChange={handleChange("price")}
                        error={errors["price"]}
                    />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Label>웨이팅</Label>
                    <IconSelectInput
                        entrySetName="waiting"
                        iconSize={56}
                        value={values["waiting"]}
                        onChange={handleChange("waiting")}
                        error={errors["waiting"]}
                    />
                </View>
            </>
            <NextPageButton onPress={handlePressSubmit}>
                <MaterialIcons name="navigate-next" size={64} color="white" />
            </NextPageButton>
        </Container>
    );
}

const Container = styled.View`
    padding-top: 88px;
    flex: 1;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 24px;
    justify-content: center;
    text-align: center;
`;

const NextPageButton = styled.TouchableOpacity`
    margin-top: 16px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;
