import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Rootlayout = () => {
    return (
        <>
            <GestureHandlerRootView>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen
                        name="exercises"
                        options={{
                            presentation: "fullScreenModal",
                        }}
                    />
                    <Stack.Screen
                        name="exerciseDetail"
                        options={{
                            presentation: "modal",
                        }}
                    />
                </Stack>
            </GestureHandlerRootView>
        </>
    );
};

export default Rootlayout;
