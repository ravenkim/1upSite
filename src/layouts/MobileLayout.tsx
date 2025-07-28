
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ScrollArea } from '@/components/ui/scroll-area.tsx'

export default function MobileLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-muted flex items-start sm:items-center justify-center">
      <div className="w-full max-w-md flex flex-col bg-background shadow-lg sm:rounded-lg h-screen sm:h-[90vh] overflow-hidden sm:outline sm:outline-1 sm:outline-border">
        <header className="flex h-[60px] shrink-0 items-center justify-between border-b px-4">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            1UP
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="size-6" />
          </Button>
        </header>

        <main className="h-[calc(100%-60px)]">
          <ScrollArea className="h-full">
            <Outlet />
          </ScrollArea>
        </main>

        
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="absolute top-3 right-4">
           <X  className="size-6" />
          </Button>
          <nav className="flex flex-col w-full max-w-xs">
            <Link to="/" className="text-2xl font-bold py-4 border-b text-center" onClick={toggleMenu}>
              {t('menu.home')}
            </Link>
            <Link to="/artist" className="text-2xl font-bold py-4 border-b text-center" onClick={toggleMenu}>
              {t('menu.artist')}
            </Link>
            <Link to="/history" className="text-2xl font-bold py-4 border-b text-center" onClick={toggleMenu}>
              {t('menu.history')}
            </Link>
            <Link to="/event" className="text-2xl font-bold py-4 border-b text-center" onClick={toggleMenu}>
              {t('menu.event')}
            </Link>
            <Link to="/goods" className="text-2xl font-bold py-4 border-b text-center" onClick={toggleMenu}>
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
  );
}
