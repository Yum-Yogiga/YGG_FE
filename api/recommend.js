import { API_END_POINT } from "../constants/api";
import axios from "axios";

export const getRestaurantNames = async (keywordValues) => {
    try {
        const result = await axios({
            method: "get",
            url: `${API_END_POINT}/restaurants/recommend`,
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            },
            data: {
                keywordInput: keywordValues,
            },
        }).catch((e) => console.log(`E E recommend.js: 16 E E\n${e}`));
        return result;
    } catch (e) {
        console.error(e);
    }
};
