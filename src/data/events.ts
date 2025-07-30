export interface Event {
    id: string;
    image: string;
    time: string;
    link: string;
    title: {
        en: string;
        ko: string;
    };
    description: {
        en: string;
        ko: string;
    };
    location: {
        en: string;
        ko: string;
    };
}

export const events: Event[] = [
    {
        id: "1",
        image: "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Event+1",
        title: {
            en: "Summer Music Festival",
            ko: "여름 음악 축제",
        },
        description: {
            en: "Join us for a fantastic summer music festival featuring various artists and genres. Enjoy live performances, food trucks, and a great atmosphere!",
            ko: "다양한 아티스트와 장르가 참여하는 환상적인 여름 음악 축제에 참여하세요. 라이브 공연, 푸드 트럭, 그리고 멋진 분위기를 즐기세요!",
        },
        location: {
            en: "City Park Amphitheater",
            ko: "시티 파크 원형극장",
        },
        time: "2025-08-15 18:00 - 23:00",
        link: "#",
    },
    {
        id: "2",
        image: "https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Event+2",
        title: {
            en: "Art Exhibition: Modern Visions",
            ko: "미술 전시회: 현대적 비전",
        },
        description: {
            en: "Explore contemporary art from local and international artists. This exhibition showcases unique perspectives and innovative techniques.",
            ko: "국내외 작가들의 현대 미술을 탐험하세요. 이 전시는 독특한 관점과 혁신적인 기술을 선보입니다.",
        },
        location: {
            en: "Downtown Art Gallery",
            ko: "다운타운 미술관",
        },
        time: "2025-09-01 10:00 - 17:00",
        link: "#",
    },
    {
        id: "3",
        image: "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Event+3",
        title: {
            en: "Tech Innovators Summit",
            ko: "기술 혁신가 서밋",
        },
        description: {
            en: "A summit for tech enthusiasts and professionals. Learn about the latest trends, network with industry leaders, and discover new technologies.",
            ko: "기술 애호가와 전문가를 위한 서밋입니다. 최신 트렌드를 배우고, 업계 리더들과 교류하며, 새로운 기술을 발견하세요.",
        },
        location: {
            en: "Convention Center Hall A",
            ko: "컨벤션 센터 A홀",
        },
        time: "2025-10-20 09:00 - 18:00",
        link: "#",
    },
    {
        id: "4",
        image: "https://via.placeholder.com/400x200/FF33A1/FFFFFF?text=Event+4",
        title: {
            en: "Community Charity Run",
            ko: "지역 자선 달리기",
        },
        description: {
            en: "Participate in our annual charity run to support local community projects. All ages and fitness levels are welcome!",
            ko: "지역 사회 프로젝트를 지원하기 위한 연례 자선 달리기에 참여하세요. 모든 연령과 체력 수준을 환영합니다!",
        },
        location: {
            en: "Riverside Trail",
            ko: "리버사이드 트레일",
        },
        time: "2025-11-05 08:00 - 12:00",
        link: "#",
    },
];
