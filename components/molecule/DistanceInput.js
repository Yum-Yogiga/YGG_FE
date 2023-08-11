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

    const handleChangeValue = (newValue) => {
        if (newValue >= minValue && newValue <= maxValue) {
            setValue(newValue);
            const newIsMin = newValue - step < minValue;
            const newIsMax = newValue + step > maxValue;
            setIsMin(newIsMin);
            setIsMax(newIsMax);
        }
    };
    const handlePressDecrease = () => {
        handleChangeValue(value - step);
    };

    const handlePressIncrease = () => {
        handleChangeValue(value + step);
    };

    return (
        <Container>
            <ControlButton disabled={isMin} onPress={handlePressDecrease}>
                <Entypo name="minus" size={28} color="white" />
            </ControlButton>
            <DistanceDisplay>
                <DistanceText>{value}km</DistanceText>
                <TimeText>*약 {Math.round(value / 0.06)}분 소요</TimeText>
            </DistanceDisplay>
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

const DistanceDisplay = styled.View`
    flex-direction: column;
    width: 200px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const DistanceText = styled.Text`
    padding-top: 12px;
    font-size: 22px;
`;

const TimeText = styled.Text`
    font-size: 12px;
    color: #fe6e00;
`;
