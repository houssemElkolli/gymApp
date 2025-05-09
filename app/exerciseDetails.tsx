import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const ExerciseDetails = () => {
    const item = useLocalSearchParams();
    const router = useRouter();
    console.log(item.instructions);

    return (
        <View className="flex flex-1">
            <View className="shadow-md bg-neutral-200 rounded-b-[40px] ">
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit="cover"
                    style={{
                        width: wp(100),
                        height: wp(100),
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-rose-500 absolute mx-4 flex justify-center items-center rounded-full "
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="close-circle" size={hp(6.5)} color="white" />
            </TouchableOpacity>
            <ScrollView
                className="mx-4 space-y-3 mt-2"
                showsVerticalScrollIndicator={false}
            >
                <Text
                    className="font-semibold text-neutral-700 tracking-wide underline"
                    style={{ fontSize: hp(3) }}
                >
                    {item.name}
                </Text>
                <Text
                    className="font-semibold text-neutral-700 tracking-wide mt-2"
                    style={{ fontSize: hp(2) }}
                >
                    Equipment
                    <Text
                        className="font-bold text-neutral-800 tracking-wide capitalize"
                        style={{ fontSize: hp(3) }}
                    >
                        {" " + item.equipment}
                    </Text>
                </Text>
                <Text
                    className="font-semibold text-neutral-700 tracking-wide mt-2"
                    style={{ fontSize: hp(2) }}
                >
                    Secondary Muscles
                    <Text
                        className="font-bold text-neutral-800 tracking-wide capitalize"
                        style={{ fontSize: hp(2) }}
                    >
                        {" " + item.secondaryMuscles}
                    </Text>
                </Text>
                <Text
                    className="font-semibold text-neutral-700 tracking-wide mt-2"
                    style={{ fontSize: hp(2) }}
                >
                    Target
                    <Text
                        className="font-bold text-neutral-800 tracking-wide capitalize"
                        style={{ fontSize: hp(2) }}
                    >
                        {" " + item.target}
                    </Text>
                </Text>
                <Text
                    className="font-semibold text-neutral-700 tracking-wide mt-2"
                    style={{ fontSize: hp(3) }}
                >
                    Instructions
                </Text>

                {item.instructions
                    .toString()
                    .split(",")
                    .map((instr: string, index: number) => {
                        return (
                            <View className="flex flex-row">
                               
                                <Text
                                    className="bg-rose-500 rounded-full p-2 text-center m-2"
                                    style={{ width: hp(4.5), height: hp(4.5) }}
                                >
                                    {index}
                                </Text>
                                <Text
                                    key={instr}
                                    className="text-neutral-800 mt-2 mb-2"
                                    style={{ fontSize: hp(1.7) }}
                                >
                                    {instr.toString()}
                                </Text>
                            </View>
                        );
                    })}
            </ScrollView>
        </View>
    );
};

export default ExerciseDetails;
