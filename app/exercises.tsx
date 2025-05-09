import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { axios } from "@/constants";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "@/components/exercisesList";

const Exercises = () => {
    const [err, setErr] = useState();
    const [data, setData] = useState();
    const { image, name } = useLocalSearchParams();
    const imageParsed = JSON.parse(image as string);

    const router = useRouter();
    console.log(imageParsed);

    useEffect(() => {
        axios
            .get(`/exercises/bodyPart/${name}?limit=10&offset=0`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => setErr(err));
    }, [name, image]);

    return (
        <ScrollView>
            <StatusBar style="dark" />
            <Image
                source={imageParsed}
                style={{
                    width: wp(100),
                    height: hp(45),
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                }}
            />
            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-rose-500 absolute mx-4 flex justify-center items-center pr-1 rounded-full "
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="caret-back" size={hp(4)} color="white" />
            </TouchableOpacity>
            <View className="mx-4 space-y-3 mt-4">
                <Text
                    style={{ fontSize: hp(3) }}
                    className="font-semibold text-neutral-700 capitalize"
                >
                    {name} exercises
                </Text>
                <View className="mb-3">
                    {data && <ExercisesList data={data} />}
                </View>
            </View>
        </ScrollView>
    );
};

export default Exercises;
