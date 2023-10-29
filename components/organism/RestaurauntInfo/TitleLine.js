import { styled } from "styled-components/native";

export function TitleLine() {
    return (
        <Container>
            <TitleContainer>
                <Title numberOfLines={1}>투파인드피터 가나다라마ㅏ만 홍대점</Title>
                <Subtitle numberOfLines={1}>양식</Subtitle>
            </TitleContainer>
            <Dummy />
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

const Dummy = styled.View`
    width: 25%;
    height: 100%;
    background-color: black;
`;
