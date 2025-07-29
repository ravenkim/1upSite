export interface HistoryEvent {
    id: string
    year: string
    title: {
        en: string
        ko: string
    }
    description: {
        en: string
        ko: string
    }
}

export const historyEvents: HistoryEvent[] = [
    {
        id: '1',
        year: '2020',
        title: {
            en: 'Company Founded',
            ko: '회사 설립',
        },
        description: {
            en: '1up Site was founded with a vision to revolutionize the digital experience.',
            ko: '1up Site는 디지털 경험을 혁신하겠다는 비전으로 설립되었습니다.',
        },
    },
    {
        id: '2',
        year: '2021',
        title: {
            en: 'First Major Product Launch',
            ko: '첫 주요 제품 출시',
        },
        description: {
            en: 'Our flagship product, "Digital Canvas," was launched to critical acclaim.',
            ko: '당사의 주력 제품인 "디지털 캔버스"가 비평가들의 찬사를 받으며 출시되었습니다.',
        },
    },
    {
        id: '3',
        year: '2022',
        title: {
            en: 'Expanded Global Presence',
            ko: '글로벌 입지 확장',
        },
        description: {
            en: 'Opened new offices in London and Tokyo, expanding our reach worldwide.',
            ko: '런던과 도쿄에 새로운 사무실을 열어 전 세계적으로 입지를 확장했습니다.',
        },
    },
    {
        id: '4',
        year: '2023',
        title: {
            en: 'Innovation Award Received',
            ko: '혁신상 수상',
        },
        description: {
            en: 'Recognized for our innovative approach to user-centric design and technology.',
            ko: '사용자 중심 디자인 및 기술에 대한 혁신적인 접근 방식을 인정받았습니다.',
        },
    },
    {
        id: '5',
        year: '2024',
        title: {
            en: 'Community Engagement Program',
            ko: '커뮤니티 참여 프로그램',
        },
        description: {
            en: 'Launched a new initiative to foster a vibrant community around our products.',
            ko: '제품 주변에 활기찬 커뮤니티를 조성하기 위한 새로운 이니셔티브를 시작했습니다.',
        },
    },
]
