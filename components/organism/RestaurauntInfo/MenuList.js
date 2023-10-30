import { styled } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export function MenuList({
    menuList = [
        {
            name: "파스타",
            price: 13000,
        },
        {
            name: "파스타",
            price: 13000,
        },
        {
            name: "파스타",
            price: 13000,
        },
    ],
}) {
    return (
        <Container>
            <TitleLine>
                <Icon>
                    <Ionicons name="restaurant" size={16} color="#9D9D9D" />
                </Icon>
                <Title>메뉴정보</Title>
            </TitleLine>
            {menuList.length < 0 ? (
                <NoMenu>"메뉴 정보가 없습니다"</NoMenu>
            ) : (
                menuList.map(({ name, price }, index) => (
                    <MenuLine key={index}>
                        <MenuName>{name}</MenuName>
                        <MenuPrice>{price}</MenuPrice>
                    </MenuLine>
                ))
            )}
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    flex-direction: column;
`;

const TitleLine = styled.View`
    padding-bottom: 4px;
    width: 100%;
    flex-direction: row;
`;

const Icon = styled.View`
    padding-right: 6px;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text``;

const MenuLine = styled.View`
    width: 100%;
    flex-direction: row;
`;

const MenuName = styled.Text`
    flex: 1;
`;

const MenuPrice = styled.Text`
    color: #9d9d9d;
`;

const NoMenu = styled.Text`
    color: "red";
`;
