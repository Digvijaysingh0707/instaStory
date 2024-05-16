import { getInstaStory } from "../config/services/instaStory"

export const getStory = async (params) => {
    const storyData = await getInstaStory(params)
    return storyData?.data

}