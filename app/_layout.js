import { useRouter } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";

import { StatusBar } from "react-native";
import { AuthProvider } from "./context/AuthContext";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#FE6E00",
        background: "#F5F5F5",
        inactive: "#CCCCCC",
    },
};

export default function Layout() {
    const router = useRouter();

    const { authState, onLogout } = useAuth();

    return (
        <ThemeProvider value={MyTheme}>
            <AuthProvider>
                <SafeAreaProvider>
                    <StatusBar backgroundColor="#FE6E00" />
                    <Stack
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "white",
                            },
                            headerLeft: () => (
                                <AntDesign
                                    name="left"
                                    size={24}
                                    color="black"
                                    onPress={() => {
                                        router.back();
                                    }}
                                />
                            ),
                            title: null,
                        }}
                    >
                        {authState?.authenticated ? (
                            <>
                                <Stack.Screen name="setkeywords" options={{ headerShown: false }} />
                                <Stack.Screen name="recommends" options={{ headerShown: false }} />
                                <Stack.Screen name="waitingReview" options={{ headerShown: false }} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="index" options={{ headerShown: false }} />
                                <Stack.Screen name="auth" options={{ headerShown: false }} />
                            </>
                        )}
                        <Stack.Screen name="[unknownpage]" options={{ headerShown: true }} />
                    </Stack>
                </SafeAreaProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
