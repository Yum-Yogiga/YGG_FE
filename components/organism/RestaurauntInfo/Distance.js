import { styled } from "styled-components/native";
import { InfoIcon } from "./InfoIcon";
import { Linking } from "react-native";

export function Distance({ mapUrl }) {
  return (
    <Container>
      <InfoIcon name="distance" />
      {<ContentText>거리 서비스는 구현 중입니다!</ContentText>}
      <MapButton>
        <MapButtonText
          onPress={() => {
            Linking.openURL(mapUrl);
          }}
        >
          지도보기
        </MapButtonText>
      </MapButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
`;

const ContentText = styled.Text`
  flex: 1;
  font-size: 14px;
  flex-wrap: wrap;
`;

const DistanceText = styled.Text`
  color: #ff8303;
`;

const MapButton = styled.TouchableOpacity`
  padding: 4px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #ffaf42;
`;

const MapButtonText = styled.Text`
  color: white;
`;
