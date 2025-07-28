import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { Menu } from 'lucide-react'

const MobileHeader = ({ toggleMenu }: { toggleMenu: () => void }) => {
    return (
        <header className="flex h-[60px] shrink-0 items-center justify-between border-b px-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
                1UP
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="size-6" />
            </Button>
        </header>
    )
}

export default MobileHeader