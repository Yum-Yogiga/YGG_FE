import { styled } from "styled-components/native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import GoodButtonIcon from "assets/GoodButton.js";
import BadButtonIcon from "assets/BadButton.js";

export default function GoodBad() {
  const router = useRouter();

  const handleGoodButtonPress = () => {
    router.push("./keywordselect");
  };

  const handleBadButtonPress = () => {
    router.push("./keywordselect");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <MessageSpace>
        <Message>식사는 어떠셨나요?</Message>
      </MessageSpace>
      <Buttons>
        <GoodButton onPress={handleGoodButtonPress}>
          <GoodButtonIcon />
        </GoodButton>
        <BadButton onPress={handleBadButtonPress}>
          <BadButtonIcon />
        </BadButton>
      </Buttons>
    </SafeAreaView>
  );
}

const MessageSpace = styled.View`
  padding-bottom: 16px;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Message = styled.Text`
  justify-content: center;
  font-size: 24px;
`;

const Buttons = styled.View`
  flex-direction: row;
  height: 50%;
`;

const GoodButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ff8303;
`;

const BadButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
