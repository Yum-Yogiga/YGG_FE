import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { styled } from "styled-components/native";
import { MultiIconSelectInput } from "molecule";
import { getRestaurantNames } from "../../api/recommend";

const FormEntry = [
    {
        name: "청결해요",
        optionValue: "clean",
        icon: "keyword_clean",
    },
    {
        name: "맛있어요",
        optionValue: "tasty",
        icon: "keyword_tasty",
    },
    {
        name: "양이 많아요",
        optionValue: "largePortion",
        icon: "keyword_amount",
    },

    {
        name: "인테리어가 좋아요",
        optionValue: "interior",
        icon: "keyword_interior",
    },
    {
        name: "친절해요",
        optionValue: "kind",
        icon: "keyword_kind",
    },
    {
        name: "재료가 신선해요",
        optionValue: "fresh",
        icon: "keyword_fresh",
    },
    {
        name: "혼밥하기 좋아요",
        optionValue: "solo",
        icon: "keyword_solo",
    },
    {
        name: "가성비가 좋아요",
        optionValue: "lowCost",
        icon: "keyword_lowCost",
    },

    {
        name: "특별해요",
        optionValue: "special",
        icon: "keyword_special",
    },
];

const optionsList = ["clean", "tasty", "largePortion", "interior", "kind", "fresh", "solo", "lowCost", "special"];

export default function KeywordSelect() {
    const [value, setValue] = useState([]);

    const router = useRouter();

    const params = useLocalSearchParams();

    const handlePressSubmit = async () => {
        const result = [];
        optionsList.forEach((listValue) => {
            const hasVal = value.includes(listValue) ? 1 : 0;
            result.push(hasVal);
        });
        const response = await getRestaurantNames(result);
        console.log(`~ ~ keywordselect.js ~ ~\n${response}`);
    };

    const handleChange = (selectedValue) => {
        const index = value.indexOf(selectedValue);
        const newValue = [...value];

        if (index === -1) {
            newValue.push(selectedValue);
        } else {
            newValue.splice(index, 1);
        }

        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Container>
            <Label>키워드 선택</Label>
            <MultiIconSelectInput entry={FormEntry} iconSize={64} value={value} onChange={handleChange} />
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
