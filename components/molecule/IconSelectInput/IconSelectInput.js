import { View } from "react-native";
import { styled } from "styled-components/native";

import { Option } from "./Option";

const EntrySets = {
    price: [
        {
            name: "가성비",
            optionValue: "cheap",
        },
        {
            name: "여유롭게",
            optionValue: "moderate",
        },
        {
            name: "FLEX",
            optionValue: "expensive",
        },
    ],
    waiting: [
        {
            name: "거의 없음",
            optionValue: "no waiting",
        },
        {
            name: "약간 있음",
            optionValue: "moderate waiting",
        },
        {
            name: "사람 많음",
            optionValue: "long waiting",
        },
    ],
};

// 할 일
// entry에 따라 보기 출력 끝
//   entrySet이 있다면 이 목록을 따르고, entry가 있다면 entry를 따름
// iconSize 정하기 => 안 하는ㄱ 나음
// value에 따라 isSelected 지정해주기 => 서옥ㅇ
// 보기 선택시 onChanged 호출
// error 전달시 출력

export const IconSelectInput = ({
    entrySetName = "",
    entry = [],
    iconSize = 80,
    value = "",
    onChange,
    error,
    style,
    ...props
}) => {
    const entryInfo = EntrySets[entrySetName] ? EntrySets[entrySetName] : entry;

    return (
        <Container>
            <Title>가격대</Title>
            <OptionList>
                {entryInfo.map(({ name, optionValue }) => {
                    return (
                        <Option
                            name={name}
                            size={iconSize}
                            onPress={() => {
                                onChange(optionValue);
                            }}
                            isSelected={value === optionValue}
                        />
                    );
                })}
            </OptionList>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: column;
    width: 100%;
`;
const Title = styled.Text`
    padding: 8px 0px;
    font-size: 28px;
    text-align: center;
`;
const OptionList = styled.View`
    padding: 0px 10%;
    flex-direction: row;
    justify-content: space-between;
`;
