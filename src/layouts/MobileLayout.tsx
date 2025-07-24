
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function MobileLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen bg-muted flex items-center justify-center">
      <div className="w-full max-w-md h-full sm:h-auto sm:max-h-[90vh] bg-background shadow-lg rounded-lg flex flex-col border">
        <header className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            1UP
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </header>

        <main className="flex-grow p-4 overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="absolute top-4 right-4">
            <X className="h-8 w-8" />
          </Button>
          <nav className="flex flex-col space-y-4 text-center">
            <Link to="/" className="text-4xl font-bold" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-4xl font-bold" onClick={toggleMenu}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
