import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyPartCart = ({
    index,
    item,
}: {
    index: number;
    item: { name: string; image: string };
}) => {
    const router = useRouter();

    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200)}>
            <TouchableOpacity
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4"
                onPress={() =>
                    router.push({
                        pathname: "/exercises",
                        params: {
                            name: item.name,
                            image: JSON.stringify(item.image),
                        },
                    })
                }
            >
                <Image
                    source={item.image}
                    contentFit="cover"
                    style={{
                        width: wp(44),
                        height: wp(52),
                        borderRadius: 35,
                        position: "absolute",
                    }}
                />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.9)"]}
                    style={{
                        width: wp(44),
                        height: hp(15),
                        borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,
                    }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-b-[35px]"
                />
                <Text
                    style={{ fontSize: hp(2.3) }}
                    className="text-white font-semibold text-center tracking-wide"
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default BodyPartCart;
