import { styled } from "styled-components/native";

import LeftButtonIcon from "assets/RestInfoLeftButton.js";
import RightButtonIcon from "assets/RestInfoRightButton.js";
import OkButtonIcon from "assets/RestInfoOkButton.js";
import RerollButtonIcon from "assets/RestInfoRerollButton.js";
import CancelButtonIcon from "assets/RestInfoCancelButton.js";

export function ButtonPanel({
  showLeftButton = true,
  showRightButton = true,
  showRerollButton = true,
  showCancelButton = false,
  showPageNum = true,
  handleLeftButtonPress = () => {},
  handleRightButtonPress = () => {},
  handleOkButtonPress = () => {},
  handleRerollButtonPress = () => {},
  handleCancelButtonPress = () => {},
  currentPage = 5,
  totalPage = 10,
}) {
  return (
    <Container>
      <ButtonsContainer>
        {showLeftButton && (
          <MoveAsideButton onPress={handleLeftButtonPress}>
            <LeftButtonIcon width={40} height={40} />
          </MoveAsideButton>
        )}
        <MainButtonSpace>
          <OkButton onPress={handleOkButtonPress}>
            <OkButtonIcon width={48} height={48} />
          </OkButton>
          {showRerollButton && (
            <RerollButton onPress={handleRerollButtonPress}>
              <RerollButtonIcon width={52} height={52} />
            </RerollButton>
          )}
          {showCancelButton && (
            <CancelButton onPress={handleCancelButtonPress}>
              <CancelButtonIcon width={52} height={52} />
            </CancelButton>
          )}
        </MainButtonSpace>
        {showRightButton && (
          <MoveAsideButton onPress={handleRightButtonPress}>
            <RightButtonIcon width={40} height={40} />
          </MoveAsideButton>
        )}
      </ButtonsContainer>
      <PageCountLine>
        {showPageNum && (
          <PageCount>
            {currentPage} / {totalPage}
          </PageCount>
        )}
      </PageCountLine>
    </Container>
  );
}

const Container = styled.View`
  height: 120px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PageCountLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainButtonSpace = styled.View`
  width: 50%;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
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

const CancelButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

const MoveAsideButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const PageCount = styled.Text`
  padding: 4px;
  text-align: center;
  font-size: 16px;
`;
