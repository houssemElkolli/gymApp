import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseCart = ({
    index,
    item,
}: {
    index: number;
    item: { name: string; gifUrl: string };
}) => {
    const router = useRouter();
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200)}>
            <TouchableOpacity
                className="flex py-3 space-2"
                onPress={() =>
                    router.push({ pathname: "/exerciseDetails", params: item })
                }
            >
                <View className="bg-neutral-200 shadow rounded-[25px] ">
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit="cover"
                        style={{
                            width: wp(42),
                            height: wp(40),
                            borderRadius: 20,
                        }}
                    />
                </View>
                <Text
                    style={{ fontSize: hp(1.7) }}
                    className="text-neutral-700 font-semibold ml-1 tracking-wide"
                >
                    {item.name.length > 20
                        ? item.name.slice(0, 20) + "..."
                        : item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default ExerciseCart;
