import { SafeAreaView, StyleSheet } from "react-native";
import { styled } from "styled-components/native";
import { TitleLine, Address, Distance, MenuList, Keywords, ButtonPanel } from "organism";
import { useLocalSearchParams } from "expo-router";
import { useRestId } from "../context/RestaurantIdContext";
import { useEffect } from "react";
import { getRestaurantDetails } from "../../api/recommend";

export default function RestaurauntInfo() {
    const { entry, currentIndex, reroll, getNextEntry, getPreviousEntry } = useRestId();
    console.log(entry[currentIndex]);
    const onLoad = async () => {
        try {
            const result = await getRestaurantDetails(entry[currentIndex]).catch((e) => console.log(e));
            console.log(result.data);
        } catch (e) {
            console.warn(e);
        }
    };
    onLoad();

    return (
        <SafeAreaView style={styles.container}>
            <InfoContainer>
                <TitleLine title="스타벅스 안양점" subtitle="카페" />
            </InfoContainer>
            <InfoContainer>
                <Address address="경기 안양시 동안구 홍길동대로 13번길 15 가나다라 무역센터 5층" />
            </InfoContainer>
            <InfoContainer>
                <Distance distance={300} />
            </InfoContainer>
            <InfoContainer>
                <MenuList />
            </InfoContainer>
            <InfoContainer>
                <Keywords />
            </InfoContainer>
            <ButtonPanel />
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
