export interface Artist {
  id: string;
  name: string;
  profession: string;
  bio: string;
  imageUrl: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Artist A',
    profession: 'Musician',
    bio: 'Artist A is a talented musician known for their unique sound, blending traditional melodies with modern electronic beats. Their live performances are a captivating experience, drawing audiences into a world of rhythm and emotion.',
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '2',
    name: 'Artist B',
    profession: 'Digital Artist',
    bio: 'Artist B specializes in digital art and captivating visuals, creating intricate and vibrant pieces that explore themes of nature and technology. Their work often features surreal landscapes and futuristic cityscapes.',
    imageUrl: '/src/assets/images/main2.jpg',
  },
  {
    id: '3',
    name: 'Artist C',
    profession: 'Sculptor',
    bio: 'Artist C is a renowned sculptor, creating intricate pieces from various materials including metal, wood, and stone. Their sculptures often depict abstract forms and human figures, conveying deep philosophical messages.',
    imageUrl: '/src/assets/images/main2.jpg',
  },
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};
