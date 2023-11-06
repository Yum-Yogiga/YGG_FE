import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>404 Not Found</Text>
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
});
