import { styled } from "styled-components/native";

export const CoverImage = ({ imageSrc, ...props }) => {
    return (
        <Container {...props}>
            <BackgroundImage source={{ uri: imageSrc }} blurRadius={5}>
                <OverlayImage source={{ uri: imageSrc }} />
            </BackgroundImage>
        </Container>
    );
};

const Container = styled.View`
    height: 196px;
    justify-content: center;
    align-items: center;
`;

const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 196px;
    position: absolute;
`;

const OverlayImage = styled.Image`
    width: 250px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -125px;
`;
