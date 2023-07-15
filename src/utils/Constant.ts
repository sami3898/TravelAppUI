export type introDataType = {
    id: number;
    title: string;
    desc: string;
    img: number;
};

export const IntroData: introDataType[] = [
    {
        id: 1,
        title: "Explore and Book the Perfect Hotel & Resort",
        desc: "Welcome to our travel app! Discover a wide range of hotels and resorts tailored to your preferences. From luxurious accommodations to cozy retreats, find the perfect room for your next getaway.",
        img: require("../../assets/images/intro.png"),
    },
    {
        id: 3,
        title: "Find Your Ideal Stay in Just a Few Clicks",
        desc: "Planning your dream vacation has never been easier. Our user-friendly interface allows you to search, compare, and book a suitable room within minutes. Say goodbye to endless browsing and let our app simplify your travel planning.",
        img: require("../../assets/images/intro2.png"),
    },
    {
        id: 2,
        title: "Uncover Hidden Gems and Travel with Confidence",
        desc: "Discover unique destinations and hidden gems off the beaten path. Our app provides you with insider recommendations and authentic reviews, ensuring you have a memorable and stress-free travel experience. Get ready to explore with confidence!",
        img: require("../../assets/images/intro3.png"),
    },
];

export type countryType = {
    id: number;
    name: string;
    img: number;
};

export const countries: countryType[] = [
    {
        id: 1,
        name: "India",
        img: require("../../assets/images/india.jpg"),
    },
    {
        id: 2,
        name: "New York",
        img: require("../../assets/images/newyork.jpg"),
    },
    {
        id: 3,
        name: "Japan",
        img: require("../../assets/images/japan.jpg"),
    },
    {
        id: 4,
        name: "Italy",
        img: require("../../assets/images/italy.jpg"),
    },
    {
        id: 5,
        name: "Australia",
        img: require("../../assets/images/australia.jpg"),
    },
];

export type destinationType = {
    id: number;
    name: string;
    desc: string;
    origin: string;
    images: number[];
};

export const destinations: destinationType[] = [
    {
        id: 1,
        name: "Munnar",
        desc: "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst honeymooners.Once the summer resort of the erstwhile British government, the main reason to visit Munnar is to explore the sprawling tea plantations and the exotic flora and fauna. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions. Munnar is also famous for being home to the rare Neelakurinji flowers that bloom once in 12 years (the next bloom is in 2030) and the endangered Nilgiri Tahr.Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. It is also an ideal place for trekking, camping, paragliding and boating. As it's a hilly region, Jeep safari is also a popular activity to experience. Munnar is often visited along with Alleppey and Thekkady, the two most popular tourist destinations in Kerala.The hill station is a haven for shopping for tea and spices. Cardamom, ginger, cinnamon, clove, nutmeg, coffee and a variety of homemade chocolates can be bought from the number of shops spread across the hill town.",
        origin: "Kerala, India",
        images: [
            require("../../assets/images/munnar1.jpeg"),
            require("../../assets/images/munnar2.jpeg"),
            require("../../assets/images/munnar3.jpeg"),
            require('../../assets/images/munnar4.jpeg'),
            require('../../assets/images/munnar5.jpeg')
        ],
    },
    {
        id: 2,
        name: "Munnar",
        desc: "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst honeymooners.Once the summer resort of the erstwhile British government, the main reason to visit Munnar is to explore the sprawling tea plantations and the exotic flora and fauna. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions. Munnar is also famous for being home to the rare Neelakurinji flowers that bloom once in 12 years (the next bloom is in 2030) and the endangered Nilgiri Tahr.Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. It is also an ideal place for trekking, camping, paragliding and boating. As it's a hilly region, Jeep safari is also a popular activity to experience. Munnar is often visited along with Alleppey and Thekkady, the two most popular tourist destinations in Kerala.The hill station is a haven for shopping for tea and spices. Cardamom, ginger, cinnamon, clove, nutmeg, coffee and a variety of homemade chocolates can be bought from the number of shops spread across the hill town.",
        origin: "Kerala, India",
        images: [
            require("../../assets/images/munnar1.jpeg"),
            require("../../assets/images/munnar2.jpeg"),
            require("../../assets/images/munnar3.jpeg"),
            require('../../assets/images/munnar4.jpeg'),
            require('../../assets/images/munnar5.jpeg')
        ],
    },
    {
        id: 3,
        name: "Munnar",
        desc: "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst honeymooners.Once the summer resort of the erstwhile British government, the main reason to visit Munnar is to explore the sprawling tea plantations and the exotic flora and fauna. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions. Munnar is also famous for being home to the rare Neelakurinji flowers that bloom once in 12 years (the next bloom is in 2030) and the endangered Nilgiri Tahr.Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. It is also an ideal place for trekking, camping, paragliding and boating. As it's a hilly region, Jeep safari is also a popular activity to experience. Munnar is often visited along with Alleppey and Thekkady, the two most popular tourist destinations in Kerala.The hill station is a haven for shopping for tea and spices. Cardamom, ginger, cinnamon, clove, nutmeg, coffee and a variety of homemade chocolates can be bought from the number of shops spread across the hill town.",
        origin: "Kerala, India",
        images: [
            require("../../assets/images/munnar1.jpeg"),
            require("../../assets/images/munnar2.jpeg"),
            require("../../assets/images/munnar3.jpeg"),
            require('../../assets/images/munnar4.jpeg'),
            require('../../assets/images/munnar5.jpeg')
        ],
    },
];
