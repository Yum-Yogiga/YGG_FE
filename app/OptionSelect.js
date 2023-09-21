import { View, Text } from "react-native";
import { DistanceInput } from "../components/molecule/DistanceInput";
import { styled } from "styled-components/native";
import { IconSelectInput } from "../components/molecule/IconSelectInput/IconSelectInput";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

import { useForm } from "hooks";

export default function OptionSelect() {
    const formData = [
        {
            name: "distance",
            value: 0.5,
            validation: (value) => {
                const availableAnswers = [0.5, 1.0, 1.5, 2.0];
                return availableAnswers.includes(value);
            },
        },
        {
            name: "price",
            value: "cheap",
            validation: (value) => {
                const availableAnswers = ["cheap", "moderate", "expensive"];
                return availableAnswers.includes(value);
            },
        },
        {
            name: "waiting",
            value: "no waiting",
            validation: (value) => {
                const availableAnswers = ["no waiting", "moderate waiting", "long waiting"];
                return availableAnswers.includes(value);
            },
        },
    ];

    const onSubmit = () => {};
    const { values, errors, handleChange, handleSubmit } = useForm(formData, onSubmit);
    const [showError, setShowError] = useState(true);

    const handlePressSubmit = () => {
        if (!showError) setShowError(true);
        handleSubmit();
    };

    return (
        <Container>
            <>
                <View style={{ marginTop: 72 }}>
                    <Label>거리</Label>
                    <DistanceInput value={values["distance"]} onChange={handleChange("distance")} />
                </View>
                <View style={{ marginTop: 50 }}>
                    <Label>가격</Label>
                    <IconSelectInput
                        entrySetName="price"
                        iconSize={56}
                        value={values["price"]}
                        onChange={handleChange("price")}
                        error={errors["price"]}
                    />
                </View>
                <View style={{ marginTop: 26 }}>
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
    flex: 1;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 24px;
    text-align: center;
`;

const NextPageButton = styled.TouchableOpacity`
    margin-top: 8px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;
