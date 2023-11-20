import { SafeAreaView, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

import { Link } from "expo-router";

export default function App() {
    return <Redirect href="/auth/login" />;

    return (
        <SafeAreaView style={styles.container}>
            <Link href="/auth/login">로그인 화면</Link>
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
