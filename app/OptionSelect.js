import { View } from "react-native";
import { DistanceInput } from "../components/molecule/DistanceInput";
import { styled } from "styled-components/native";
import { IconSelectInput } from "../components/molecule/IconSelectInput/IconSelectInput";
import { MaterialIcons } from "@expo/vector-icons";

export default function OptionSelect() {
    return (
        <Container>
            <>
                <View style={{ marginTop: 72 }}>
                    <Label>거리</Label>
                    <DistanceInput />
                </View>
                <View style={{ marginTop: 50 }}>
                    <Label>가격</Label>
                    <IconSelectInput entrySetName="price" iconSize={56} onChange={() => true} error={""} />
                </View>
                <View style={{ marginTop: 26 }}>
                    <Label>웨이팅</Label>
                    <IconSelectInput entrySetName="waiting" iconSize={56} onChange={() => true} error={""} />
                </View>
            </>
            <NextPageButton
                onPress={() => {
                    console.log("TEST");
                }}
            >
                <MaterialIcons name="navigate-next" size={64} color="white" />
            </NextPageButton>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 24px;
    text-align: center;
`;

const NextPageButton = styled.TouchableOpacity`
    margin-top: 8px;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
    background-color: #ffaf42;
`;
