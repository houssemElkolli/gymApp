import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageCarousel from "@/components/imageCarousel";
import BodyParts from "@/components/bodyParts";

const Home = () => {
    return (
        <SafeAreaView
            className="flex-1 bg-white flex  space-y-5"
            edges={["top"]}
        >
            <StatusBar style={"dark"} />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text
                        className="font-bold tracking-wider text-neutral-700 uppercase px-1"
                        style={{ fontSize: hp(4.5) }}
                    >
                        Ready To
                    </Text>
                    <Text
                        className="font-bold tracking-wider text-rose-500 uppercase px-1"
                        style={{ fontSize: hp(4.5) }}
                    >
                        Workout
                    </Text>
                </View>
                <View className="flex-row  justify-center gap-3 items-center space-y-2">
                    <View
                        className="bg-neutral-200 rounded-full flex justify-center items-center border border-rose-500"
                        style={{ width: hp(4.5), height: hp(4.5) }}
                    >
                        <Ionicons name="search" size={hp(2)} color="black" />
                    </View>
                    <View
                        className="bg-neutral-200 rounded-full flex justify-center items-center border border-rose-500"
                        style={{ width: hp(5.5), height: hp(5.5) }}
                    >
                        <Ionicons
                            name="notifications"
                            size={hp(3)}
                            color="black"
                        />
                    </View>
                    <View className="border border-rose-500 rounded-full">
                        <Image
                            source={require("../assets/images/avatar.png")}
                            style={{
                                width: hp(7.5),
                                height: hp(7.5),
                                borderRadius: 9999,
                            }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <ImageCarousel></ImageCarousel>
            </View>
            <View className="flex-1">
                <BodyParts />
            </View>
        </SafeAreaView>
    );
};

export default Home;
