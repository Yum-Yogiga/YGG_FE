import styled from "styled-components/native";

export const Option = ({ name, size, isSelected = false, ...props }) => {
    return (
        <Container size={size} {...props}>
            <Icon size={size} source={require("assets/icon.png")} />
            <NameText size={size}>{name}</NameText>
        </Container>
    );
};

const Container = styled.View`
    width: ${({ size }) => size}px;
    align-items: center;
    justify-content: space-between;
`;

const Icon = styled.Image`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

const NameText = styled.Text`
    padding-top: 12px;
    width: ${({ size }) => size}px;
    font-size: 12px;
    text-align: center;
`;
