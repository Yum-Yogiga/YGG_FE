import { styled } from "styled-components/native";

import { InfoIcon } from "./InfoIcon";

export function Address({ address = "대충 주소 들어가는 자리" }) {
    return (
        <Container>
            <IconSpace>
                <InfoIcon name="address" style={{ paddingTop: 3 }} />
            </IconSpace>
            <Content numberOfLines={2}>{address}</Content>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 48px;
    flex-direction: row;
`;

const IconSpace = styled.View`
    height: 100%;
`;

const Content = styled.Text`
    font-size: 14px;
    flex-wrap: wrap;
`;
