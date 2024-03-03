import LevelOneBackgroundImage from "../assets/images/levelOneBGImage.png"
import levelTwoBGImage from "../assets/images/levelTwoBGImage.png"
import levelThreeBGImage from "../assets/images/levelThreeBGImage.png"
import levelFourBGImage from "../assets/images/levelFourBGImage.png"
import levelFiveBGImage from "../assets/images/levelFiveBGImage.png"
import leveSixBGImage from "../assets/images/leveSixBGImage.png"
import levelSevenBGImage from "../assets/images/levelSevenBGImage.png"
import levelEightBGImage from "../assets/images/levelEightBGImage.png"
import leveNineBGImage from "../assets/images/leveNineBGImage.png"
import Level from "../interfaces/Level.interface"
import { questionsSetOne } from "./questionsSets/questionsSetOne"
import { questionsSetTwo } from "./questionsSets/questionSetTwo"
import { questionSetThree } from "./questionsSets/questionSetThree"

export const levels: Array<Level> = [
    {
        level: 1,
        questions: questionsSetOne,
        backgroundImage: {
            src: LevelOneBackgroundImage,
            alt: "Level One Background Image"
        },
        duration: 600
    },
    {
        level: 2,
        questions: questionsSetOne,
        backgroundImage: {
            src: levelTwoBGImage,
            alt: "Level Two Background Image"
        },
        duration: 600
    },
    {
        level: 3,
        questions: questionsSetOne,
        backgroundImage: {
            src: levelThreeBGImage,
            alt: "Level three Background Image"
        },
        duration: 600
    },
    {
        level: 4,
        questions: questionsSetTwo,
        backgroundImage: {
            src: levelFourBGImage,
            alt: "Level Four Background Image"
        },
        duration: 600
    },
    {
        level: 5,
        questions: questionsSetTwo,
        backgroundImage: {
            src: levelFiveBGImage,
            alt: "Level five Background Image"
        },
        duration: 600
    },
    {
        level: 6,
        questions: questionsSetTwo,
        backgroundImage: {
            src: leveSixBGImage,
            alt: "Level Six Background Image"
        },
        duration: 600
    },
    {
        level: 7,
        questions: questionSetThree,
        backgroundImage: {
            src: levelSevenBGImage,
            alt: "Level Seven Background Image"
        },
        duration: 600
    },
    {
        level: 8,
        questions: questionSetThree,
        backgroundImage: {
            src: levelEightBGImage,
            alt: "Level Eight Background Image"
        },
        duration: 600
    },
    {
        level: 9,
        questions: questionSetThree,
        backgroundImage: {
            src: leveNineBGImage,
            alt: "Level Nine Background Image"
        },
        duration: 600
    }
]
