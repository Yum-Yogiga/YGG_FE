import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export default function Layout() {
    const router = useRouter();

    return (
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
                                router.push("/auth/login");
                            }}
                        />
                    ),
                    title: null,
                }}
            >
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="signup" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}
