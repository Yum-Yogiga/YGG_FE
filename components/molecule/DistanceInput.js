import { styled } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const DistanceInput = () => {
    return (
        <Container>
            <ControlButton>
                <Entypo name="plus" size={28} color="white" />
            </ControlButton>
            <ValueDisplay>
                <ValueText>1</ValueText>
            </ValueDisplay>
            <ControlButton>
                <Entypo name="minus" size={28} color="white" />
            </ControlButton>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ControlButton = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 28px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;

const ValueDisplay = styled.View`
    width: 200px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const ValueText = styled.Text`
    font-size: 22px;
`;
