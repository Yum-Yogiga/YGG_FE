import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
    return (
        <SafeAreaProvider>
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
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="signup" options={{ headerShown: true }} />
            </Stack>
        </SafeAreaProvider>
    );
}
