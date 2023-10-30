import { styled } from "styled-components/native";
import { Octicons } from "@expo/vector-icons";

export function Address({ address = "대충 주소 들어가는 자리" }) {
    return (
        <Container>
            <Icon>
                <Octicons name="location" size={20} color="#9D9D9D" />
            </Icon>
            <Content numberOfLines={2}>{address}</Content>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
`;

const Icon = styled.View`
    padding-top: 1px;
    padding-right: 6px;
    align-items: center;
`;

const Content = styled.Text`
    font-size: 14px;
    flex-wrap: wrap;
`;
