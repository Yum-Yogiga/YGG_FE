import { styled } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export function RecommendRate({ rate }) {
    const isGood = rate >= 50;
    const iconColor = isGood ? "#4fb443" : "#de061a";
    const iconName = isGood ? "thumbs-up" : "thumbs-down";

    return (
        <Container>
            <RateIcon color={iconColor}>
                <Feather name={iconName} size={20} color={iconColor} />
            </RateIcon>
            <TextLine>
                추천 <RateText color={iconColor}>{rate}%</RateText>
            </TextLine>
        </Container>
    );
}

const Container = styled.View`
    width: 72px;
    height: 72px;
    flex-direction: column;
    align-items: center;
`;

const RateIcon = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.color || "#000"};
    align-items: center;
    justify-content: center;
`;

const TextLine = styled.Text`
    margin: 10px 0px;
    font-size: 16px;
`;

const RateText = styled.Text`
    color: ${(props) => props.color || "#000"};
`;
