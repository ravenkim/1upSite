import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from 'src/shared/lib/shadcn/components/ui/button.tsx'
import { useNavigate } from 'react-router'

interface SSmobileHeaderProps {
    title: string
    showBack?: boolean
}

const SSmobileHeader: React.FC<SSmobileHeaderProps> = ({ title,  }) => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center h-14  border-border bg-background/90 backdrop-blur sticky top-0 z-10">

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(-1)}
                    aria-label="뒤로가기"
                    className="shrink-0 mr-1"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>

            <span className="text-lg font-semibold truncate flex-1 text-left pl-2">
                {title}
            </span>
        </div>
    )
}

export default SSmobileHeader
