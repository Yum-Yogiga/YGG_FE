import { styled } from "styled-components/native";
import { RecommendRate } from "molecule/RecommendRate";

export function TitleLine({
  title = "식당 상호나 이름이 들어가는 자리",
  rate = 25,
}) {
  return (
    <Container>
      <TitleContainer>
        <Title numberOfLines={1}>{title}</Title>
      </TitleContainer>
      <RecommendRate rate={rate} />
    </Container>
  );
}

const Container = styled.View`
  height: 72px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const TitleContainer = styled.View`
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const Subtitle = styled.Text`
  padding: 2px;
  font-size: 16px;
  align-items: center;
`;
