import { SafeAreaView, StyleSheet } from "react-native";
import { styled } from "styled-components/native";
import {
  TitleLine,
  Address,
  Distance,
  MenuList,
  Keywords,
  ButtonPanel,
} from "organism";
import { useLocalSearchParams } from "expo-router";
import { useRestId } from "../context/RestaurantIdContext";
import { useState, useEffect } from "react";
import { getRestaurantDetails } from "../../api/recommend";
import { CoverImage } from "../../components/molecule/CoverImage";
import { useRouter } from "expo-router";

export default function RestaurauntInfo() {
  const [restInfo, setRestInfo] = useState({});
  const [isReady, setIsReady] = useState(false);
  const { entry, currentIndex, reroll, getNextEntry, getPreviousEntry } =
    useRestId();
  const router = useRouter();

  const handleNextPageButtonPress = () => {};

  useEffect(() => {
    const getRestInfo = async () => {
      try {
        setIsReady(false);
        const result = await getRestaurantDetails(entry[currentIndex]).catch(
          (e) => console.log(e)
        );
        const {
          name,
          link: mapLink,
          address,
          tel,
          menuList,
          likeCount,
          dislikeCount,
        } = result.data;
        const rate =
          dislikeCount === 0
            ? 100
            : Math.floor((100 * likeCount) / (likeCount + dislikeCount));
        const coverImageLink = menuList[0] ? menuList[0].imageUrl : null;
        setRestInfo({
          coverImageLink,
          name,
          rate,
          mapLink,
          address,
          tel,
          menuList,
        });
        setIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    };

    try {
      getRestInfo();
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <CoverImage imageSrc={restInfo.coverImageLink} />
      <InfoContainer>
        <TitleLine title={restInfo.name} rate={restInfo.rate} />
      </InfoContainer>
      <InfoContainer>
        <Address address={restInfo.address} />
      </InfoContainer>
      <InfoContainer>
        <Distance mapUrl={restInfo.mapLink} />
      </InfoContainer>
      <InfoContainer>
        <MenuList menuList={restInfo.menuList} />
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
  padding: 4px 20px;
  border-radius: 4px;
  background-color: white;
`;
