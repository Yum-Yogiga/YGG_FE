import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Linking, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

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
        <Stack.Screen name="goodbad" options={{ headerShown: false }} />
        <Stack.Screen name="keywordselect" options={{ headerShown: false }} />
        <Stack.Screen name="reviewWait" options={{ headerShown: false }} />
        <Stack.Screen name="waitingScreen" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
