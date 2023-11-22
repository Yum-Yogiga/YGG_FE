import { SafeAreaView, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Redirect href="/auth/login" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
