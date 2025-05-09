import { View, Text, FlatList } from "react-native";
import React from "react";
import { bodyParts } from "@/constants";
import BodyPartCart from "./BodyPartCart";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BodyParts = () => {
    return (
        <View className="mx-4">
            <Text
                className="font-semibold text-neutral-700"
                style={{ fontSize: hp(3) }}
            >
                Exercises
            </Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item, index }) => (
                    <BodyPartCart index={index} item={item} />
                )}
            />
        </View>
    );
};

export default BodyParts;
