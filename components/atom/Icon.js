import { styled } from "styled-components/native";

export const Icon = ({ size, src, style, ...props }) => {
    return <Container size={size} source={src} style={[style]} {...props} />;
};

const Container = styled.Image`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;
