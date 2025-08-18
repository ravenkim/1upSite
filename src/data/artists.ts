export interface Artist {
    id: string
    name: string
    profession: {
        en: string[]
        ko: string[]
    }
    instaId: string
    instaUrl: string
    imageUrl: string
}

export const artists: Artist[] = [
    {
        id: '1',
        name: 'GOLDBUUDA',
        profession: {
            en: ['Founder of 1UP', 'Executive Director', 'Artist', 'Producer'],
            ko: ['1UP 창립자', '총괄 디렉터', '아티스트', '프로듀서'],
        },
        instaId: 'goldbuuda',
        instaUrl: 'https://www.instagram.com/goldbuuda/',
        imageUrl: '',
    },
    {
        id: '2',
        name: 'Gh0st',
        profession: {
            en: ['DJ', 'Creative Director', 'Management'],
            ko: ['디제이', '크리에이티브 디렉터', '매니지먼트'],
        },
        instaId: 'gh0st__x__',
        instaUrl: 'https://www.instagram.com/gh0st__x__/',
        imageUrl: '',
    },
    {
        id: '3',
        name: 'POPXICK',
        profession: {
            en: ['Artist', 'Producer', 'Mixing Engineer', 'Operations Lead at 1UP'],
            ko: ['아티스트', '프로듀서', '믹싱 엔지니어', '1UP 운영 리드'],
        },
        instaId: 'popxick',
        instaUrl: 'https://www.instagram.com/popxick/',
        imageUrl: '',
    },
    {
        id: '4',
        name: 'SUJIN LIM',
        profession: {
            en: ['Model', 'Video Editor'],
            ko: ['모델', '비디오 에디터'],
        },
        instaId: 'sujinymph',
        instaUrl: 'https://www.instagram.com/sujinymph/',
        imageUrl: '',
    },
    {
        id: '5',
        name: 'JP',
        profession: {
            en: ['Photographer', 'Video Director'],
            ko: ['포토그래퍼', '영상 디렉터'],
        },
        instaId: 'jpp_.17',
        instaUrl: 'https://www.instagram.com/jpp_.17/',
        imageUrl: '',
    },
    {
        id: '6',
        name: 'Skelly',
        profession: {
            en: ['Artist', 'Producer'],
            ko: ['아티스트', '프로듀서'],
        },
        instaId: 'skeletontheblock',
        instaUrl: 'https://www.instagram.com/skeletontheblock/',
        imageUrl: '',
    },
    {
        id: '7',
        name: 'chilloud',
        profession: {
            en: ['Producer', 'Artist', 'DJ', 'Tech Operator'],
            ko: ['프로듀서', '아티스트', 'DJ', '테크 오퍼레이터'],
        },
        instaId: 'chilloudx',
        instaUrl: 'https://www.instagram.com/chilloudx/',
        imageUrl: '',
    },
    {
        id: '8',
        name: 'Rodi',
        profession: {
            en: ['Dancer'],
            ko: ['댄서'],
        },
        instaId: '_iamrodi',
        instaUrl: 'https://www.instagram.com/_iamrodi/',
        imageUrl: '',
    },
]

export const getArtistById = (id: string): Artist | undefined => {
    return artists.find((artist) => artist.id === id)
}
