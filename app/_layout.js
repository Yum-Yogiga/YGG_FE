import { useRouter } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";

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
    return (
        <ThemeProvider value={MyTheme}>
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
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
