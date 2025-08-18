import { Button } from '@/components/ui/button.tsx'
import { Menu, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MobileHeader = ({
    toggleMenu,
    title,
                          goBackBtn
}: {
    toggleMenu: () => void
    title: string
    goBackBtn:boolean
}) => {


    const navigate = useNavigate();

    return (
        <header className="flex h-[60px] shrink-0 items-center justify-between border-b px-4">


            <div className="text-2xl font-bold tracking-tight items-center flex ">
                       {goBackBtn && <Button variant="ghost" size="icon" onClick={()=> navigate(-1)}>
                           <ArrowLeft className="size-6" />

                       </Button>}
                {title}</div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="size-6" />
            </Button>
        </header>
    )
}

export default MobileHeader
