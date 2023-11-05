import { styled } from "styled-components/native";

import LeftButtonIcon from "assets/RestInfoLeftButton.js";
import RightButtonIcon from "assets/RestInfoRightButton.js";
import OkButtonIcon from "assets/RestInfoOkButton.js";
import RerollButtonIcon from "assets/RestInfoRerollButton.js";

export function ButtonPanel({
    showLeftButton = true,
    showRightButton = true,
    showRerollButton = false,
    handleLeftButtonTouch = () => {},
    handleRightButtonTouch = () => {},
    handleOkButtonTouch = () => {},
    handleRerollButtonTouch = () => {},
}) {
    return (
        <Container>
            {showLeftButton && (
                <MoveAsideButton onPress={handleLeftButtonTouch}>
                    <LeftButtonIcon width={36} height={36} />
                </MoveAsideButton>
            )}
            <MainButtonSpace>
                <OkButton onPress={handleOkButtonTouch}>
                    <OkButtonIcon width={48} height={48} />
                </OkButton>
                {showRerollButton && (
                    <RerollButton onPress={handleRerollButtonTouch}>
                        <RerollButtonIcon width={48} height={48} />
                    </RerollButton>
                )}
            </MainButtonSpace>
            {showRightButton && (
                <MoveAsideButton onPress={handleRightButtonTouch}>
                    <RightButtonIcon width={36} height={36} />
                </MoveAsideButton>
            )}
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const MainButtonSpace = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const OkButton = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const RerollButton = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const MoveAsideButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
