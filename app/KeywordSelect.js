import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { styled } from "styled-components/native";
import { MultiIconSelectInput } from "molecule";

const dummyOptions = [
    {
        name: "키워드1",
        optionValue: "keyword_1",
        icon: "price_cheap",
    },
    {
        name: "키워드2",
        optionValue: "keyword_2",
        icon: "price_cheap",
    },
    {
        name: "키워드3",
        optionValue: "keyword_3",
        icon: "price_cheap",
    },
    {
        name: "키워드4",
        optionValue: "keyword_4",
        icon: "price_cheap",
    },
    {
        name: "키워드5",
        optionValue: "keyword_5",
        icon: "price_cheap",
    },
    {
        name: "키워드6",
        optionValue: "keyword_6",
        icon: "price_cheap",
    },
    {
        name: "키워드7",
        optionValue: "keyword_7",
        icon: "price_cheap",
    },
    {
        name: "키워드8",
        optionValue: "keyword_8",
        icon: "price_cheap",
    },
    {
        name: "키워드9",
        optionValue: "keyword_9",
        icon: "price_cheap",
    },
];

export default function KeywordSelect() {
    const [value, setValue] = useState([]);

    const handlePressSubmit = () => {};

    const handleChange = (selectedValue) => {
        const index = value.indexOf(selectedValue);
        const newValue = [...value];

        if (index === -1) {
            newValue.push(selectedValue);
        } else {
            newValue.splice(index, 1);
        }

        setValue(newValue);
    };

    return (
        <Container>
            <Label>키워드 선택</Label>
            <MultiIconSelectInput entry={dummyOptions} iconSize={72} value={value} onChange={handleChange} />
            <FormCompleteButton onPress={handlePressSubmit}>
                <MaterialIcons name="check" size={64} color="white" />
            </FormCompleteButton>
        </Container>
    );
}

const Container = styled.View`
    flex-direction: column;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 24px;
    text-align: center;
    margin-top: 80px;
`;

const FormCompleteButton = styled.TouchableOpacity`
    margin-top: 8px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;
