export type introDataType = {
    id: number,
    title: string,
    desc: string,
    img: number
}

export const IntroData: introDataType[] = [
    {
        id: 1,
        title: 'Explore and Book the Perfect Hotel & Resort',
        desc: 'Welcome to our travel app! Discover a wide range of hotels and resorts tailored to your preferences. From luxurious accommodations to cozy retreats, find the perfect room for your next getaway.',
        img: require('../../assets/images/intro.png')
    },
    {
        id: 3,
        title: 'Find Your Ideal Stay in Just a Few Clicks',
        desc: 'Planning your dream vacation has never been easier. Our user-friendly interface allows you to search, compare, and book a suitable room within minutes. Say goodbye to endless browsing and let our app simplify your travel planning.',
        img: require('../../assets/images/intro2.png')
    },
    {
        id: 2,
        title: 'Uncover Hidden Gems and Travel with Confidence',
        desc: 'Discover unique destinations and hidden gems off the beaten path. Our app provides you with insider recommendations and authentic reviews, ensuring you have a memorable and stress-free travel experience. Get ready to explore with confidence!',
        img: require('../../assets/images/intro3.png')
    },
]