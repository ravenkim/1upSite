import MobileLayout from '@/layouts/MobileLayout.tsx'
import { useLanguage } from '@/hooks/useLanguage.ts'
import { useState, useEffect } from 'react'

export default function HomePage() {
    const { language } = useLanguage()
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    const isKor = language === 'ko'
    const title = isKor ? 'ABOUT US' : 'ABOUT US'

    const fullText = isKor
        ? `1UP LABEL은 아티스트, 프로듀서, DJ, 엔지니어, 크리에이터 등 음악을 둘러싼 다양한 주체들이 모여 만들어진 커뮤니티형 뮤직 레이블입니다. 우리는 전통적인 레이블의 방식에 머무르지 않고, 인터넷 문화와 라이브 스트리밍 트렌드를 선도하며, 음악과 콘텐츠가 함께 공존하는 새로운 생태계를 지향합니다.

1UP LABEL은 단순히 음악을 제작하고 유통하는 곳이 아닙니다. 서로 다른 개성을 가진 멤버들이 모여 아이디어를 교환하고, 실험적인 프로젝트를 실행하며, 관객과 실시간으로 소통하는 무대와 플랫폼을 만들어갑니다.

우리의 목표는 더 많은 사람들이 음악과 문화를 자유롭게 즐기고 참여할 수 있는 열린 공간(Open Community)을 구축하는 것입니다. 1UP LABEL은 그 중심에서, 새로운 세대를 위한 창작과 경험을 계속 확장해 나가고 있습니다.`
        : `1UP LABEL is a community-driven music label built by a diverse collective of artists, producers, DJs, engineers, and creators. We go beyond the traditional boundaries of a record label, pioneering internet culture and live streaming trends to shape a new ecosystem where music and content coexist.

1UP LABEL is not just about producing and distributing music. It is a space where unique voices come together to exchange ideas, launch experimental projects, and create platforms that connect directly with audiences in real time.

Our mission is to build an open community where more people can freely experience, enjoy, and participate in music and culture. At the heart of this vision, 1UP LABEL continues to expand the possibilities of creation and experience for a new generation.`

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 20) // 타이핑 속도 조절 (50ms)

            return () => clearTimeout(timer)
        }
    }, [currentIndex, fullText])

    return (
        <MobileLayout>
            <div className="flex h-full w-full flex-col items-center justify-center px-4 ">
                <img
                    src="https://lh3.googleusercontent.com/d/1ttlkxdwb6zlGz8GJF-gEj6O9NmciX421"
                    alt="main image"
                    className="mb-6 rounded-2xl shadow-lg"
                />

                <div className="max-w-xl w-full rounded-2xl border border-border bg-card p-8 text-center shadow-md ring-1 ring-border/50 backdrop-blur">
                    {/* 제목 */}
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground fade-in shining-text">
                        {title}
                    </h2>

                    {/* 타이핑 효과가 적용된 본문 */}
                    <div className="space-y-6 text-base leading-relaxed text-muted-foreground text-left ">
                        <div className="typewriter ">
                            {displayedText.split('\n\n').map((paragraph, index) => (
                                paragraph && (
                                    <p key={index} className="mb-6 last:mb-0">
                                        {paragraph}
                                    </p>
                                )
                            ))}
                            <span className="typing-cursor"></span>
                        </div>
                    </div>
                </div>
            </div>
        </MobileLayout>
    )
}