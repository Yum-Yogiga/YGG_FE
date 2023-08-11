import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { styled } from "styled-components/native";

export const DistanceInput = () => {
    const [value, setValue] = useState(0.5);
    const step = 0.5;
    const minValue = 0.5;
    const maxValue = 2.0;
    const [isMin, setIsMin] = useState(value - step <= minValue);
    const [isMax, setIsMax] = useState(value + step >= maxValue);

    const handlePressDecrease = () => {
        if (value - step >= minValue) setValue(value - step);
        if (value - step < minValue) setIsMin(true);
        if (value + step < maxValue) setIsMax(false);
    };

    const handlePressIncrease = () => {
        if (value + step <= maxValue) setValue(value + step);
        if (value + step > maxValue) setIsMax(true);
        if (value - step > minValue) setIsMin(false);
    };

    return (
        <Container>
            <ControlButton disabled={isMin} onPress={handlePressDecrease}>
                <Entypo name="minus" size={28} color="white" />
            </ControlButton>
            <ValueDisplay>
                <ValueText>{value}km</ValueText>
            </ValueDisplay>
            <ControlButton disabled={isMax} onPress={handlePressIncrease}>
                <Entypo name="plus" size={28} color="white" />
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
    background-color: ${({ disabled }) => (disabled ? "#a9a9a9" : "#ffaf42")};
`;

const ValueDisplay = styled.View`
    flex-direction: column;
    width: 200px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const ValueText = styled.Text`
    font-size: 22px;
`;
