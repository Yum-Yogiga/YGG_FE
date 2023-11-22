import { useEffect } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useRestId } from "../context/RestaurantIdContext";

export default function RestaurauntInfo() {
    const router = useRouter();
    const { entry } = useRestId();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(`./${entry[0]}`);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <LoadingSpinner size="large" color="#32CD32" />
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

const LoadingSpinner = styled(ActivityIndicator)``;
