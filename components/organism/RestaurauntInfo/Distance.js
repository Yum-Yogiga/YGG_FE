import { styled } from "styled-components/native";
import { InfoIcon } from "./InfoIcon";

export function Distance({ distance }) {
    return (
        <Container>
            <InfoIcon name="distance" />
            <ContentText>
                도보 {Math.floor(distance / 60)}분 이내 <DistanceText>{distance}m</DistanceText>
            </ContentText>
            <MapButton>
                <MapButtonText>지도보기</MapButtonText>
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
