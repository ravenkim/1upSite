export interface Artist {
  id: string;
  name: string;
  profession: {
    en: string;
    ko: string;
  };
  bio: {
    en: string;
    ko: string;
  };
  imageUrl: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Artist A',
    profession: {
      en: 'Musician',
      ko: '음악가',
    },
    bio: {
      en: 'Artist A is a talented musician known for their unique sound, blending traditional melodies with modern electronic beats. Their live performances are a captivating experience, drawing audiences into a world of rhythm and emotion.',
      ko: '아티스트 A는 전통적인 멜로디와 현대적인 일렉트로닉 비트를 혼합한 독특한 사운드로 유명한 재능 있는 음악가입니다. 그들의 라이브 공연은 리듬과 감정의 세계로 관객을 끌어들이는 매혹적인 경험입니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '2',
    name: 'Artist B',
    profession: {
      en: 'Digital Artist',
      ko: '디지털 아티스트',
    },
    bio: {
      en: 'Artist B specializes in digital art and captivating visuals, creating intricate and vibrant pieces that explore themes of nature and technology. Their work often features surreal landscapes and futuristic cityscapes.',
      ko: '아티스트 B는 디지털 아트와 매혹적인 비주얼을 전문으로 하며, 자연과 기술의 테마를 탐구하는 복잡하고 생동감 넘치는 작품을 만듭니다. 그들의 작품은 종종 초현실적인 풍경과 미래적인 도시 풍경을 특징으로 합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '3',
    name: 'Artist C',
    profession: {
      en: 'Sculptor',
      ko: '조각가',
    },
    bio: {
      en: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
      ko: '아티스트 C는 금속, 나무, 돌을 포함한 다양한 재료로 복잡한 작품을 만드는 유명한 조각가입니다. 그들의 조각품은 종종 추상적인 형태와 인물을 묘사하며 깊은 철학적 메시지를 전달합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '4',
    name: 'Artist C',
    profession: {
      en: 'Sculptor',
      ko: '조각가',
    },
    bio: {
      en: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
      ko: '아티스트 C는 금속, 나무, 돌을 포함한 다양한 재료로 복잡한 작품을 만드는 유명한 조각가입니다. 그들의 조각품은 종종 추상적인 형태와 인물을 묘사하며 깊은 철학적 메시지를 전달합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '4',
    name: 'Artist C',
    profession: {
      en: 'Sculptor',
      ko: '조각가',
    },
    bio: {
      en: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
      ko: '아티스트 C는 금속, 나무, 돌을 포함한 다양한 재료로 복잡한 작품을 만드는 유명한 조각가입니다. 그들의 조각품은 종종 추상적인 형태와 인물을 묘사하며 깊은 철학적 메시지를 전달합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },

  {
    id: '4',
    name: 'Artist C',
    profession: {
      en: 'Sculptor',
      ko: '조각가',
    },
    bio: {
      en: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
      ko: '아티스트 C는 금속, 나무, 돌을 포함한 다양한 재료로 복잡한 작품을 만드는 유명한 조각가입니다. 그들의 조각품은 종종 추상적인 형태와 인물을 묘사하며 깊은 철학적 메시지를 전달합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },

  {
    id: '4',
    name: 'Artist C',
    profession: {
      en: 'Sculptor',
      ko: '조각가',
    },
    bio: {
      en: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
      ko: '아티스트 C는 금속, 나무, 돌을 포함한 다양한 재료로 복잡한 작품을 만드는 유명한 조각가입니다. 그들의 조각품은 종종 추상적인 형태와 인물을 묘사하며 깊은 철학적 메시지를 전달합니다.',
    },
    imageUrl: '/src/assets/images/main2.jpg',
  },


];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
