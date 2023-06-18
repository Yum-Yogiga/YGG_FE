import styled from "styled-components/native";

export function Image({ width, height, src, onPress }) {
    return <ImageFrame width={width} height={height} src={src} onPress={onPress} />;
}

const ImageFrame = styled.Image`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: 8px;
`;
