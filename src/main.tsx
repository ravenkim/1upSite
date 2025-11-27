import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
// import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import ArtistPage from './pages/ArtistPage.tsx'
import HistoryPage from './pages/HistoryPage.tsx'
import EventPage from './pages/EventPage.tsx'
import GoodsPage from './pages/GoodsPage.tsx'
import { LanguageProvider } from './providers/LanguageProvider.tsx'
import ArtistDetailPage from '@/pages/ArtistDetailPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <HomePage />,
            },
   
            {
                path: 'artist',
                element: <ArtistPage />,
            },
            {
                path: 'artist/:id',
                element: <ArtistDetailPage />,
            },
            {
                path: 'history',
                element: <HistoryPage />,
            },
            {
                path: 'event',
                element: <EventPage />,
            },
            {
                path: 'goods',
                element: <GoodsPage />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    </StrictMode>,
)
