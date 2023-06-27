import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}></ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        paddingVertical: 30,
    },
});
