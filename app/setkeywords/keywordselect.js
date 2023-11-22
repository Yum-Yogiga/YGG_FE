import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { styled } from "styled-components/native";
import { MultiIconSelectInput } from "molecule";

const FormEntry = [
    {
        name: "청결해요",
        optionValue: "dummy6",
        icon: "keyword_clean",
    },
    {
        name: "맛있어요",
        optionValue: "dummy1",
        icon: "keyword_tasty",
    },
    {
        name: "양이 많아요",
        optionValue: "dummy4",
        icon: "keyword_amount",
    },

    {
        name: "인테리어가 좋아요",
        optionValue: "dummy5",
        icon: "keyword_interior",
    },
    {
        name: "친절해요",
        optionValue: "dummy7",
        icon: "keyword_kind",
    },
    {
        // 재료가 신선해요 구하기
        name: "빨리 나와요",
        optionValue: "dummy3",
        icon: "keyword_fast",
    },
    {
        name: "혼밥하기 좋아요",
        optionValue: "dummy9",
        icon: "keyword_solo",
    },
    {
        name: "가성비가 좋아요",
        optionValue: "dummy2",
        icon: "keyword_lowCost",
    },

    {
        name: "특별해요",
        optionValue: "dummy8",
        icon: "keyword_special",
    },
];
// 재료가 신선해요 넣기
/*
사용자가 입력한 옵션과 키워드값을 서버에 전송해서
서버에서 추천 식당 목록을 받아오면 됩니다 
*/

export default function KeywordSelect() {
    const [value, setValue] = useState([]);

    const router = useRouter();

    const handlePressSubmit = () => {};

    const params = useLocalSearchParams();

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
