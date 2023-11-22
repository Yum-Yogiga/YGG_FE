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
    dummy: [
        {
            name: "맛있어요",
            optionValue: "dummy1",
            icon: "keyword_tasty",
        },
        {
            name: "가성비가 좋아요",
            optionValue: "dummy2",
            icon: "keyword_lowCost",
        },
        {
            name: "빨리 나와요",
            optionValue: "dummy3",
            icon: "keyword_fast",
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
            name: "청결해요",
            optionValue: "dummy6",
            icon: "keyword_clean",
        },
        {
            name: "친절해요",
            optionValue: "dummy7",
            icon: "keyword_kind",
        },
        {
            name: "특별해요",
            optionValue: "dummy8",
            icon: "keyword_special",
        },
        {
            name: "혼밥하기 좋아요",
            optionValue: "dummy9",
            icon: "keyword_solo",
        },
    ],
};

export const MultiIconSelectInput = ({
    entrySetName = "",
    entry = [],
    iconSize = 56,
    rowSize = 3,
    value = [],
    onChange,
    error = "",
    style,
    ...props
}) => {
    const entryInfo = EntrySets[entrySetName] ? EntrySets[entrySetName] : entry;
    const entrySize = entryInfo.length;
    const rowNum = Math.floor(entrySize / rowSize);
    const optionInfo = [];

    for (let i = 0; i < rowNum; i++) {
        const rowStart = i * rowSize;
        const rowEnd = entrySize > rowStart + rowSize ? rowStart + rowSize : entrySize;

        optionInfo.push(
            <OptionRow key={i}>
                {entryInfo.slice(rowStart, rowEnd).map(({ name, optionValue, icon }, index) => {
                    return (
                        <Option
                            style={{ paddingHorizontal: iconSize }}
                            key={rowStart + index}
                            name={name}
                            size={iconSize}
                            iconSrc={icon}
                            onPress={() => {
                                onChange(optionValue);
                            }}
                            isSelected={value.indexOf(optionValue) !== -1}
                        />
                    );
                })}
            </OptionRow>
        );
    }

    return (
        <Container style={style} {...props}>
            <OptionList>{optionInfo}</OptionList>
            <ErrorDisplay>{error.length > 0 ? `*${error}` : " "}</ErrorDisplay>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: column;
`;

const OptionList = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OptionRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 32px;
`;

const ErrorDisplay = styled.Text`
    margin-top: 6px;
    font-size: 12px;
    text-align: center;
    color: red;
`;
