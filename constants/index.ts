import Axios from "axios";
import Config from "react-native-config";

export const imageCarouselData = [
    require("../assets/images/slide1.png"),
    require("../assets/images/slide2.png"),
    require("../assets/images/slide3.png"),
    require("../assets/images/slide4.png"),
    require("../assets/images/slide5.png"),
];
export const bodyParts = [
    {
        name: "back",
        image: require("../assets/images/back.png"),
    },
    {
        name: "cardio",
        image: require("../assets/images/cardio.png"),
    },
    {
        name: "lower arms",
        image: require("../assets/images/lowerArms.png"),
    },
    {
        name: "lower legs",
        image: require("../assets/images/lowerLegs.png"),
    },
    {
        name: "chest",
        image: require("../assets/images/chest.png"),
    },
    {
        name: "neck",
        image: require("../assets/images/neck.png"),
    },
    {
        name: "shoulders",
        image: require("../assets/images/shoulders.png"),
    },
    {
        name: "upper armes",
        image: require("../assets/images/upperArms.png"),
    },
    {
        name: "upper legs",
        image: require("../assets/images/upperLegs.png"),
    },
    {
        name: "waist",
        image: require("../assets/images/waist.png"),
    },
];

const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const axios = Axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-rapidapi-key": Config.RAPID_API_KEY,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
});
