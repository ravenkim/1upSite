import React from 'react'
import SSmobileFooter from 'src/shared/layouts/SSmobileFooter.tsx'
import { ScrollArea } from 'src/shared/lib/shadcn/components/ui/scroll-area.tsx'

interface SSmobileProps {
    header?: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
}

/**
 * 모바일 환경에 특화된 공통 레이아웃 컴포넌트
 * - 상단 헤더, 하단 네비게이션(푸터), 중앙 컨텐츠 영역
 * - 안전 영역(padding, notch 등) 고려
 * - TailwindCSS 적용
 */
const HEADER_HEIGHT = 57
const FOOTER_HEIGHT = 68

const SSmobile: React.FC<SSmobileProps> = ({ header, footer, children }) => {
    const height = header ? HEADER_HEIGHT + FOOTER_HEIGHT : FOOTER_HEIGHT



    return (
        <div className="bg-background text-foreground border-border relative mx-auto flex min-h-[100dvh] max-w-md flex-col overflow-hidden border shadow-lg">
            {/* 상단 헤더 */}
            {header && (
                <header className="bg-background/90 border-border sticky top-0 z-10 border-b px-4  backdrop-blur">
                    {header}
                </header>
            )}
            {/* 중앙 컨텐츠 */}
            <ScrollArea

                className={` `}
                style={{ height: `calc(100dvh - ${height + 5 }px)` }}
            >


                {children as React.ReactNode}
            </ScrollArea>
            {/* 하단 네비게이션/푸터 */}
            <footer className="bg-background/90 border-border sticky bottom-0 z-10 border-t backdrop-blur">
                <SSmobileFooter />
            </footer>
        </div>
    )
}

export default SSmobile
