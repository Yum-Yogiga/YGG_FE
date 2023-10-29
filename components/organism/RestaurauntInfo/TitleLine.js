import { styled } from "styled-components/native";
import { RecommendRate } from "molecule/RecommendRate";

export function TitleLine({
    title = "식당 상호나 이름이 들어가는 자리",
    subtitle = "식당 유형이 들어가는 자리",
    rate = 25,
}) {
    return (
        <Container>
            <TitleContainer>
                <Title numberOfLines={1}>{title}</Title>
                <Subtitle numberOfLines={1}>{subtitle}</Subtitle>
            </TitleContainer>
            <RecommendRate rate={rate} />
        </Container>
    );
}

const Container = styled.View`
    padding: 8px 0px;
    width: 100%;
    flex-direction: row;
    border: 1px solid black;
`;

const TitleContainer = styled.View`
    width: 75%;
    height: 100%;
    flex-direction: column;
`;

const Title = styled.Text`
    padding: 2px;
    font-size: 18px;
    align-items: center;
`;

const Subtitle = styled.Text`
    padding: 2px;
    font-size: 16px;
    align-items: center;
`;
