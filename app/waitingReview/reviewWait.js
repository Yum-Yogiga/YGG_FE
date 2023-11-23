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
import { useState, useEffect } from "react";
import { getRestaurantDetails } from "api/recommend";
import { CoverImage } from "molecule/CoverImage";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function ReviewWait() {
  const [restInfo, setRestInfo] = useState({});
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const { Id } = useLocalSearchParams();

  const handleOkButtonPress = () => {
    console.log("누름");
    router.push("./goodbad");
  };

  useEffect(() => {
    const getRestInfo = async () => {
      try {
        setIsReady(false);
        const result = await getRestaurantDetails(Id).catch((e) =>
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
        showLeftButton={false}
        showRightButton={false}
        showRerollButton={false}
        showCancelButton={true}
        showPageNum={false}
        handleOkButtonPress={handleOkButtonPress}
        handleCancelButtonPress={() => {
          router.push("/setkeywords/optionselect");
        }}
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
