import { styled } from "styled-components/native";
import { RecommendRate } from "molecule/RecommendRate";

export function TitleLine() {
    return (
        <Container>
            <TitleContainer>
                <Title numberOfLines={1}>투파인드피터 가나다라마ㅏ만 홍대점</Title>
                <Subtitle numberOfLines={1}>양식</Subtitle>
            </TitleContainer>
            <RecommendRate rate={75} />
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 72px;
    flex-direction: row;
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
