export interface Product {
    id: number;
    title: {
        en: string;
        ko: string;
    };
    price: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: {
            ko: '1UP 공식 티셔츠',
            en: '1UP Official T-shirt',
        },
        price: '₩35,000',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    },
    {
        id: 2,
        title: {
            ko: '1UP 로고 후드티',
            en: '1UP Logo Hoodie',
        },
        price: '₩55,000',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=center',
    },
    {
        id: 3,
        title: {
            ko: '아티스트 사인 포스터',
            en: 'Artist Signed Poster',
        },
        price: '₩15,000',
        image: 'https://images.unsplash.com/photo-1582719202042-06545159c8f2?w=400&h=400&fit=crop&crop=center',
    },
    {
        id: 4,
        title: {
            ko: '콘서트 응원봉',
            en: 'Concert Light Stick',
        },
        price: '₩25,000',
        image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop&crop=center',
    },
    {
        id: 5,
        title: {
            ko: '1UP 에코백',
            en: '1UP Eco Bag',
        },
        price: '₩20,000',
        image: 'https://images.unsplash.com/photo-1572626283362-9992d0831c39?w=400&h=400&fit=crop&crop=center',
    },
    {
        id: 6,
        title: {
            ko: '스페셜 앨범',
            en: 'Special Album',
        },
        price: '₩45,000',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=center',
    },
];

