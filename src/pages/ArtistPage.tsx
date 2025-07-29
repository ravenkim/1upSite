import React from 'react'
import { Link } from 'react-router-dom'
import { artists } from '../data/artists'
import MobileLayout from '@/layouts/MobileLayout.tsx'
import { useLanguage } from '@/hooks/useLanguage'

const ArtistPage: React.FC = () => {
    const { language } = useLanguage()

    return (
        <MobileLayout title="Artists">
            <div className="bg-background text-foreground container mx-auto p-4">
                <div className="grid grid-cols-3 gap-6">
                    {artists.map((artist) => (
                        <div
                            key={artist.id}
                            className="text-card-foreground transform overflow-hidden rounded-lg shadow-md transition duration-300 hover:scale-105"
                        >
                            <Link to={`/artist/${artist.id}`}>
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src={artist.imageUrl}
                                        alt={artist.name}
                                        className="border-border h-full w-full rounded-lg border object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <h2 className="mb-1 text-xl font-semibold">
                                        {artist.name}
                                    </h2>
                                    <p className="text-md">
                                        {
                                            artist.profession[
                                                language as keyof typeof artist.profession
                                            ]
                                        }
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </MobileLayout>
    )
}

export default ArtistPage
