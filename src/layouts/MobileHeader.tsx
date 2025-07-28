import { Button } from '@/components/ui/button.tsx'
import { Menu } from 'lucide-react'

const MobileHeader = ({ toggleMenu, title }: { toggleMenu: () => void, title: string }) => {
    return (
        <header className="flex h-[60px] shrink-0 items-center justify-between border-b px-4">
            <span  className="text-2xl font-bold tracking-tight">
                {title}
            </span>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="size-6" />
            </Button>
        </header>
    )
}

export default MobileHeader