import React from 'react'
import {  useParams } from 'react-router-dom'
import { getArtistById } from '../data/artists'
import MobileLayout from '@/layouts/MobileLayout.tsx'
import { useLanguage } from '@/hooks/useLanguage'

const ArtistDetailPage: React.FC = () => {

    const { id } = useParams<{ id: string }>()
    const artist = getArtistById(id || '')
    const { language } = useLanguage()

    if (!artist) {
        return (
            <div className="text-destructive mt-10 text-center text-xl">
                Artist not found.
            </div>
        )
    }


    return (
        <MobileLayout
            title={artist.name}
            goBackBtn={true}
        >
            <div className="bg-background text-foreground container mx-auto p-4">
                <div className="bg-card text-card-foreground border-border overflow-hidden rounded-lg border shadow-lg md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            src={artist.imageUrl}
                            alt={artist.name}
                            className="h-64 w-full object-cover md:w-64"
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="mb-2 text-4xl font-bold">
                            {artist.name}
                        </h1>
                        <p className="mb-4 text-xl">
                            {
                                artist.profession[
                                    language as keyof typeof artist.profession
                                ]
                            }
                        </p>
                        {/*<p className="leading-relaxed">{displayedBio}</p>*/}
                    </div>
                </div>
            </div>
        </MobileLayout>
    )
}

export default ArtistDetailPage
