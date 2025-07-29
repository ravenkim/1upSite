import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import MobileHeader from '@/layouts/MobileHeader.tsx'
export default function MobileLayout({
                                         children,
                                         title = '1UP',
                                     }: {
    children?: React.ReactNode
    title?: string
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang)
    }

    return (
        <div className="bg-muted flex min-h-screen items-start justify-center sm:items-center">
            <div className="relative w-[500px] flex h-screen flex-col overflow-hidden bg-background shadow-lg sm:h-[90vh] sm:rounded-lg sm:outline sm:outline-1">
                {/* 상단 메뉴 헤더 */}
                <MobileHeader toggleMenu={toggleMenu} title={title} />

                {/* 실제 페이지 콘텐츠 */}
                <main className="h-[calc(100%-60px)] w-full">
                    <ScrollArea className="h-full w-full">{children}</ScrollArea>
                </main>

                {/* 슬라이딩 메뉴 오버레이 (이제 이 div는 이 박스 내부에만 적용됨) */}
                {isMenuOpen && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="absolute top-3 right-4"
                        >
                            <X className="size-6" />
                        </Button>
                        <nav className="flex w-full max-w-xs flex-col">
                            <Link
                                to="/"
                                className="border-b py-4 text-center text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                {t('menu.home')}
                            </Link>
                            <Link
                                to="/artist"
                                className="border-b py-4 text-center text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                {t('menu.artist')}
                            </Link>
                            <Link
                                to="/history"
                                className="border-b py-4 text-center text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                {t('menu.history')}
                            </Link>
                            <Link
                                to="/event"
                                className="border-b py-4 text-center text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                {t('menu.event')}
                            </Link>
                            <Link
                                to="/goods"
                                className="border-b py-4 text-center text-2xl font-bold"
                                onClick={toggleMenu}
                            >
                                {t('menu.goods')}
                            </Link>
                        </nav>
                        <div className="absolute bottom-8 flex space-x-4">
                            <Button
                                variant={language === 'ko' ? 'default' : 'ghost'}
                                onClick={() => handleLanguageChange('ko')}
                            >
                                {t('language.korean')}
                            </Button>
                            <Button
                                variant={language === 'en' ? 'default' : 'ghost'}
                                onClick={() => handleLanguageChange('en')}
                            >
                                {t('language.english')}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
