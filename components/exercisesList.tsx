import { View, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ExerciseCart from "./exerciseCart";
const ExercisesList = ({
    data,
}: {
    data: [{ name: string; gifUrl: string }];
}) => {
    return (
        <View className="mx-4">
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item, index }) => (
                    <ExerciseCart index={index} item={item} />
                )}
            />
        </View>
    );
};

export default ExercisesList;
