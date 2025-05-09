import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Index = () => {
    const router = useRouter();
    return (
        <View className="flex flex-1 justify-end">
            <StatusBar style={"light"} />
            <Image
                style={{ width: "100%", height: "100%", position: "absolute" }}
                source={require("../assets/images/welcome.png")}
            />
            <LinearGradient
                colors={["transparent", "#18181b"]}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className={`flex justify-end ${
                    Platform.OS === "android" && "gap-5"
                }  pb-12 space-y-8`}
            >
                <Animated.View
                    entering={FadeInDown.delay(100).springify()}
                    className="flex items-center"
                >
                    <Text
                        className="text-white font-bold tracking-wide "
                        style={{ fontSize: hp(5) }}
                    >
                        Best <Text className="text-rose-500 "> Workouts</Text>
                    </Text>
                    <Text
                        className="text-white font-bold tracking-wide "
                        style={{ fontSize: hp(5) }}
                    >
                        For You
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        onPress={() => router.push("/home")}
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text
                            style={{ fontSize: hp(3) }}
                            className="text-white font-bold tracking-widest"
                        >
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
};

export default Index;
