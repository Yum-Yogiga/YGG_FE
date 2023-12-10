import { useState } from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import OptionLabelIcon from "assets/recommendOptionTitleStar.js";
import { styled } from "styled-components/native";

import { useForm } from "hooks";
import { DistanceInput, IconSelectInput } from "molecule";
import { View } from "react-native";

const recommendOptionFormData = [
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

function OptionLabel({ children, ...props }) {
    return (
        <LabelContainer {...props}>
            <OptionLabelIcon width={24} height={24} color="black" />
            <Label>{children}</Label>
            <View width={24} />
        </LabelContainer>
    );
}

const LabelContainer = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
    align-items: center;
    justify-content: center;
`;

const Label = styled.Text`
    margin-left: 4px;
    font-size: 24px;
    justify-content: center;
    text-align: center;
`;

export default function OptionSelect() {
    const router = useRouter();

    const onSubmit = (values) => {
        const { distance, price, waiting } = values;
        router.push({ pathname: "./keywordselect", params: { distance: distance, price: price, waiting: waiting } });
    };

    const { values, errors, handleChange, handleSubmit } = useForm(recommendOptionFormData, onSubmit);
    const [showError, setShowError] = useState(true);

    const handlePressSubmit = () => {
        if (!showError) setShowError(true);
        handleSubmit();
    };

    return (
        <Container>
            <OptionContainer>
                <Option>
                    <OptionLabel>거리</OptionLabel>
                    <DistanceInput value={values["distance"]} onChange={handleChange("distance")} />
                </Option>
                <Option style={{ marginTop: 64 }}>
                    <OptionLabel>가격</OptionLabel>
                    <IconSelectInput
                        entrySetName="price"
                        iconSize={56}
                        value={values["price"]}
                        onChange={handleChange("price")}
                        error={errors["price"]}
                    />
                </Option>
                <Option style={{ marginTop: 40 }}>
                    <OptionLabel>웨이팅</OptionLabel>
                    <IconSelectInput
                        entrySetName="waiting"
                        iconSize={56}
                        value={values["waiting"]}
                        onChange={handleChange("waiting")}
                        error={errors["waiting"]}
                    />
                </Option>
            </OptionContainer>
            <BottomPanel>
                <NextPageButton onPress={handlePressSubmit}>
                    <MaterialIcons name="navigate-next" size={64} color="white" />
                </NextPageButton>
            </BottomPanel>
        </Container>
    );
}

const Container = styled.View`
    padding-top: 88px;
    flex: 1;
    align-items: center;
`;

const OptionContainer = styled.View``;

const Option = styled.View``;

const BottomPanel = styled.View``;

const NextPageButton = styled.TouchableOpacity`
    margin-top: 16px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;
