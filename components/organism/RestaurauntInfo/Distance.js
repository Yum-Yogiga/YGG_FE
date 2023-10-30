import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export function Distance({ distance }) {
    return (
        <Container>
            <Icon>
                <MaterialIcons name="directions-walk" size={20} color="#9D9D9D" />
            </Icon>
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
    flex-direction: row;
`;

const Icon = styled.View`
    padding-top: 1px;
    padding-right: 6px;
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
