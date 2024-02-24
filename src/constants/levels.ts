import LevelOneBackgroundImage from "../assets/images/levelOneBGImage.png"
import levelTwoBGImage from "../assets/images/levelTwoBGImage.png"
import Level from "../interfaces/Level.interface"
export const levels: Array<Level> = [
    {
        level: 1,
        questions: [
            {
                text: "What is the capital of France?",
                answer: {
                    text: "Kevin Pixelmon",
                    answerPositions: []
                },
                hint: "It's the city of love"
            },
            {
                text: "What is the capital of Spain?",
                answer: "Madrid",
                hint: "It's the city of Real Madrid"
            },
            {
                text: "What is the capital of Italy?",
                answer: "Rome",
                hint: "It's the city of the Colosseum"
            },
            {
                text: "What is the capital of Germany?",
                answer: "Berlin",
                hint: "It's the city of the Berlin Wall"
            },
            {
                text: "What is the capital of England?",
                answer: "London",
                hint: "It's the city of the Big Ben"
            }
        ],
        backgroundImage: {
            src: LevelOneBackgroundImage,
            alt: "Level One Background Image"
        }
    },
    {
        level: 2,
        questions: [
            {
                text: "What is the capital of France?",
                answer: "Paris",
                hint: "It's the city of love"
            },
            {
                text: "What is the capital of Spain?",
                answer: "Madrid",
                hint: "It's the city of Real Madrid"
            },
            {
                text: "What is the capital of Italy?",
                answer: "Rome",
                hint: "It's the city of the Colosseum"
            },
            {
                text: "What is the capital of Germany?",
                answer: "Berlin",
                hint: "It's the city of the Berlin Wall"
            },
            {
                text: "What is the capital of England?",
                answer: "London",
                hint: "It's the city of the Big Ben"
            }
        ],
        backgroundImage: {
            src: levelTwoBGImage,
            alt: "Level Two Background Image"
        }
    }
]
