import React from 'react';
import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

const ArtistPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Members</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <div key={artist.id} className="text-card-foreground rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 ">
            <Link to={`/artist/${artist.id}`}>
              <div className="w-full aspect-square overflow-hidden">
                <img src={artist.imageUrl} alt={artist.name} className="rounded-lg w-full h-full object-cover border border-border" />
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-1">{artist.name}</h2>
                <p className="text-md ">{artist.profession}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
