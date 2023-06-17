import styled from "styled-components/native";

export function Image({ width, height, src, onPress }) {
    const setSize = (size) => {};
    return <ImageFrame width={width} height={height} src={src} onPress={onPress} />;
}

const ImageFrame = styled.Image`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 0.5rem;
`;
