import { SafeAreaView, StyleSheet } from "react-native";
import { styled } from "styled-components/native";
import { TitleLine, Address, Distance, MenuList, Keywords, ButtonPanel } from "organism";
import { useRouter } from "expo-router";

export default function DummyWait() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <DummyImage source={require("assets/dummy2.jpg")} resizeMode="center" />
            <InfoContainer>
                <TitleLine title="수부니흐" subtitle="양식" rate={94} />
            </InfoContainer>
            <InfoContainer>
                <Address address="서울 마포구 동교로38길 35 2층" />
            </InfoContainer>
            <InfoContainer>
                <Distance distance={428} />
            </InfoContainer>
            <InfoContainer>
                <MenuList
                    menuList={[
                        {
                            name: "비프웰링턴 200g",
                            price: 39000,
                        },
                        {
                            name: "트러플 화이트라구",
                            price: 24000,
                        },
                        {
                            name: "라따뚜이와 부라타치즈",
                            price: 15000,
                        },
                    ]}
                />
            </InfoContainer>
            <InfoContainer>
                <Keywords
                    keywords={[
                        {
                            name: "맛있어요",
                            value: 400,
                        },
                        {
                            name: "특별해요",
                            value: 254,
                        },
                        {
                            name: "친절해요",
                            value: 181,
                        },
                    ]}
                />
            </InfoContainer>
            <ButtonPanel
                showLeftButton={false}
                showRightButton={false}
                showRerollButton={false}
                showPageNum={false}
                showCancelButton={true}
                handleOkButtonTouch={() => router.push("./goodbad")}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "stretch",
    },
});

const InfoContainer = styled.View`
    width: 100%;
    margin-bottom: 1px;
    padding: 8px 20px;
    border-radius: 4px;
    background-color: white;
`;

const DummyImage = styled.Image`
    flex: 1;
`;
