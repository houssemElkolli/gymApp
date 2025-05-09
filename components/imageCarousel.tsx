import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { imageCarouselData } from "@/constants";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { renderItem } from "@/utils/renderItem";

const ImageCarousel = () => {
    const progress = useSharedValue<number>(0);

    return (
        <Carousel
            autoPlayInterval={4000}
            data={imageCarouselData}
            loop={false}
            height={258}
            pagingEnabled={true}
            snapEnabled={true}
            width={wp(100)}
            style={{
                width: "100%",
            }}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
            }}
            onProgressChange={progress}
            renderItem={renderItem({ rounded: true })}
        />
    );
};

export default ImageCarousel;
