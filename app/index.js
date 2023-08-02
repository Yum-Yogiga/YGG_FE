import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
    return <SafeAreaView style={styles.container}>First Page</SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
