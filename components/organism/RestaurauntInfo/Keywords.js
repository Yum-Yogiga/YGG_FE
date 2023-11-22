import { styled } from "styled-components/native";

import { InfoIcon } from "./InfoIcon";

const DummyKeywords = [
    {
        name: "가격이 싸요",
        value: 100,
    },
    {
        name: "집중이 잘 돼요",
        value: 250,
    },
    {
        name: "맛이 좋아요",
        value: 100000,
    },
];

export function Keywords({ keywords = DummyKeywords }) {
    return (
        <Container>
            <TitleLine>
                <InfoIcon name="address" />
                <Title>상위 키워드</Title>
            </TitleLine>
            <KeywordSpace>
                {keywords.map(({ name, value }) => (
                    <KeywordLine key={name}>
                        <KeywordName>{name}</KeywordName>
                        <KeywordRate>{value}</KeywordRate>
                    </KeywordLine>
                ))}
            </KeywordSpace>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    flex-direction: column;
`;

const TitleLine = styled.View`
    flex-direction: row;
    align-items: center;

    margin-bottom: 4px;
`;

const Title = styled.Text``;

const KeywordSpace = styled.View`
    width: 100%;
    flex-direction: column;
`;

const KeywordLine = styled.View`
    margin-bottom: 4px;
    width: 100%;
    padding: 2px 8px;
    border: 1px solid black;
    border-radius: 8px;
    align-items: center;

    flex-direction: row;
`;

const KeywordName = styled.Text``;

const KeywordRate = styled.Text`
    text-align: right;
    flex: 1;
`;
