import React from 'react'
import { Link } from 'react-router-dom'
import { artists } from '../data/artists'
import MobileLayout from '@/layouts/MobileLayout.tsx'
import { useLanguage } from '@/hooks/useLanguage'

const ArtistPage: React.FC = () => {
  const { language } = useLanguage();

  return (
      <MobileLayout
          title="Artists"
      >
          <div className="container mx-auto p-4 bg-background text-foreground">
              <div className="grid grid-cols-3 gap-6">
                  {artists.map((artist) => (
                      <div key={artist.id}
                           className="text-card-foreground rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 ">
                          <Link to={`/artist/${artist.id}`}>
                              <div className="w-full aspect-square overflow-hidden">
                                  <img src={artist.imageUrl} alt={artist.name}
                                       className="rounded-lg w-full h-full object-cover border border-border" />
                              </div>
                              <div className="p-2">
                                  <h2 className="text-xl font-semibold mb-1">{artist.name}</h2>
                                  <p className="text-md ">{artist.profession[language as keyof typeof artist.profession]}</p>
                              </div>
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </MobileLayout>
  );
};

export default ArtistPage;
