import { View, Text } from "react-native";
import { DistanceInput } from "../components/molecule/DistanceInput";
import { styled } from "styled-components/native";
import { IconSelectInput } from "../components/molecule/IconSelectInput/IconSelectInput";

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
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;

const Label = styled.Text`
    font-size: 24px;
    text-align: center;
`;
