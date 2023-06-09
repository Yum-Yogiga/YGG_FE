import styled from "styled-components/native";

export function Avatar({ size, ...props }) {
    return <AvatarFrame {...props} />;
}

const AvatarFrame = styled.Image`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: ${({ size }) => size / 2}px;
`;

export default Avatar;
