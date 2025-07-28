import React from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../data/artists';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || '');

  if (!artist) {
    return <div className="text-center text-xl text-destructive mt-10">Artist not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden md:flex border border-border">
        <div className="md:flex-shrink-0">
          <img src={artist.imageUrl} alt={artist.name} className="w-full h-64 object-cover md:w-64" />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
          <p className="text-xl mb-4">{artist.profession}</p>
          <p className="leading-relaxed">{artist.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailPage;
