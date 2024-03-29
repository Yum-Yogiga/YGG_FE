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
import { useRestId } from "../context/RestaurantIdContext";
import { useState, useEffect } from "react";
import { getRestaurantDetails } from "../../api/recommend";
import { CoverImage } from "../../components/molecule/CoverImage";
import { useRouter } from "expo-router";

export default function RestaurauntInfo() {
  const [restInfo, setRestInfo] = useState({});
  const [isReady, setIsReady] = useState(false);
  const {
    getCurrentId,
    entryLength,
    currentIndex,
    reroll,
    goNextPage,
    goPreviousPage,
    rerollReady,
  } = useRestId();
  const router = useRouter();

  const handleNextPageButtonPress = () => {
    goNextPage();
  };

  const handlePrevButtonPress = () => {
    goPreviousPage();
  };

  const handleOkButtonPress = () => {
    const Id = getCurrentId();
    router.push({
      pathname: `/waitingReview/reviewWait`,
      params: { Id },
    });
  };

  const handleRerollButtonPress = () => {
    reroll();
  };

  useEffect(() => {
    const getRestInfo = async () => {
      try {
        setIsReady(false);
        const result = await getRestaurantDetails(getCurrentId()).catch((e) =>
          console.log(e)
        );
        const {
          name,
          link: mapLink,
          address,
          tel,
          menuList,
          likeCount,
          dislikeCount,
          keywordCounts,
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
          keywords: keywordCounts,
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
        <Keywords keywords={restInfo.keywords} />
      </InfoContainer>
      <ButtonPanel
        showRerollButton={rerollReady}
        handleLeftButtonPress={handlePrevButtonPress}
        handleRightButtonPress={handleNextPageButtonPress}
        handleRerollButtonPress={handleRerollButtonPress}
        handleOkButtonPress={handleOkButtonPress}
        currentPage={currentIndex + 1}
        totalPage={entryLength}
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
  padding: 4px 20px;
  border-radius: 4px;
  background-color: white;
`;
