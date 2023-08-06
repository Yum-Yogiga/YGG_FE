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
            <ErrorList>*{error}</ErrorList>
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

const ErrorList = styled.Text`
    padding: 6px 0px;
    text-align: center;
    font-size: 12px;
    color: red;
`;
