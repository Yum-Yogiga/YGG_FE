import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
    const router = useRouter();

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
                                router.push("/setkeywords/keywordselect");
                            }}
                        />
                    ),
                    title: null,
                }}
            >
                <Stack.Screen name="waitingRecommend" options={{ headerShown: false }} />
                <Stack.Screen name="dummyInfo1" options={{ headerShown: false }} />
                <Stack.Screen name="dummyInfo2" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}