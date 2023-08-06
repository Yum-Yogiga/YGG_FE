import { styled } from "styled-components/native";

import { Option } from "./Option";

const EntrySets = {
    price: [
        {
            name: "가성비",
            optionValue: "cheap",
            icon: "price_cheap",
        },
        {
            name: "여유롭게",
            optionValue: "moderate",
            icon: "price_moderate",
        },
        {
            name: "FLEX",
            optionValue: "expensive",
            icon: "price_expensive",
        },
    ],
    waiting: [
        {
            name: "거의 없음",
            optionValue: "no waiting",
            icon: "waiting_no",
        },
        {
            name: "약간 있음",
            optionValue: "moderate waiting",
            icon: "waiting_moderate",
        },
        {
            name: "사람 많음",
            optionValue: "long waiting",
            icon: "waiting_long",
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
        <Container {...props}>
            <Title>가격대</Title>
            <OptionList>
                {entryInfo.map(({ name, optionValue, icon }, index) => {
                    return (
                        <Option
                            key={index}
                            name={name}
                            size={iconSize}
                            iconSrc={icon}
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
