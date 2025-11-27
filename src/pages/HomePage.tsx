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
        ? `INTRODUCTION

1UP LABEL은 아티스트·크리에이터·팬이 서로 연결되고 성장하는
커뮤니티 기반 크리에이티브 컬처 집단입니다.

음악, 비주얼, 패션, 세계관을 하나의 언어로 엮어
서로의 잠재력을 ‘1UP’시키는 문화적 플랫폼을 만들어갑니다.

DESCRIPTION

GOLDBUUDA(골드부다)를 중심으로
래퍼, 프로듀서, 비주얼 아티스트, 댄서, 디자이너 등 다양한 창작자들이 모여
자유롭고 실험적인 방식으로 예술을 확장하는 창작 커뮤니티입니다.

우리는 장르와 문화의 경계를 넘나들며
힙합·트랩·아프로비츠·아시아 미학·디지털 감성을 결합해
독자적인 “1UP 사운드”와 “1UP 문화”를 만들어갑니다.

1UP LABEL의 핵심 가치
	•	Community First
사람과 사람, 아티스트와 팬의 연결을 최우선으로 하는 참여형 생태계.
	•	Originality & Worldbuilding
각자의 정체성과 스토리를 바탕으로 새로운 세계관을 구축하는 창작 방식.
	•	Experimental Creativity
힙합을 기반으로 글로벌 사운드와 미래적인 아이디어를 실험하는 태도.
	•	Independent Spirit
각 아티스트가 자신만의 방식과 속도로
작품과 브랜드를 구축할 수 있도록 돕는 자율적인 환경.

1UP LABEL은 문화·정체성·창작자들이 함께 만들어가는 커뮤니티입니다.
함께 창조하고, 함께 성장하며, 함께 1UP 됩니다.`
        : `INTRODUCTION

1UP LABEL is a community-driven creative collective
where artists, creators, and fans connect, collaborate, and grow together.

We merge music, visuals, fashion, and worldbuilding into a shared creative language—
a cultural platform built to uplift one another and push creativity forward.

DESCRIPTION

Founded and led by GOLDBUUDA,
1UP LABEL is a community of rappers, producers, visual artists, dancers, and designers
working in a free, experimental environment that encourages authentic expression.

We move fluidly across genres and cultures—
blending Hip-hop, Trap, Afrobeats, Asian aesthetics, and digital energy
to shape the distinct “1UP sound” and the evolving “1UP culture.”

Core Values of 1UP LABEL
	•	Community First
A horizontal ecosystem rooted in connection, collaboration, and shared growth.
	•	Originality & Worldbuilding
Projects built from each artist’s identity, story, and vision—
creating new worlds with authenticity at the core.
	•	Experimental Creativity
Hip-hop as our foundation,
with global sounds and future-forward ideas expanding our creative horizons.
	•	Independent Spirit
Empowering each creator to develop their sound, visuals, and brand
in their own way and at their own pace.

1UP LABEL is a creative community shaped by its culture, identity, and the people within it.
We create together.
We grow together.
We level up together.
`

    useEffect(() => {
        setDisplayedText(''); // Clear displayed text
        setCurrentIndex(0);   // Reset index
    }, [fullText]);

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
                    <div className="space-y-4 text-base leading-relaxed text-muted-foreground text-left">
                        <div className="typewriter">
                            {displayedText.split('\n\n').map((paragraph, index) => {
                                if (!paragraph) return null
                                
                                // 섹션 제목 감지
                                const isSectionTitle = 
                                    paragraph === 'INTRODUCTION' ||
                                    paragraph === 'DESCRIPTION' || 
                                    paragraph === '1UP LABEL의 핵심 가치' ||
                                    paragraph === 'Core Values of 1UP LABEL'
                                
                                if (isSectionTitle) {
                                    return (
                                        <h3 
                                            key={index} 
                                            className="mb-6 mt-10 text-2xl font-bold tracking-tight text-foreground first:mt-0 uppercase"
                                        >
                                            {paragraph}
                                        </h3>
                                    )
                                }
                                
                                // 불릿 포인트 항목 감지 (•를 포함하는 단락)
                                if (paragraph.includes('•')) {
                                    const lines = paragraph.split('\n')
                                    const bullets: Array<{ title: string; desc: string[] }> = []
                                    let currentBullet: { title: string; desc: string[] } | null = null
                                    
                                    lines.forEach((line) => {
                                        const trimmedLine = line.trim()
                                        if (trimmedLine.startsWith('•')) {
                                            // 이전 불릿 항목이 있으면 저장
                                            if (currentBullet) {
                                                bullets.push(currentBullet)
                                            }
                                            // 새로운 불릿 시작
                                            const title = trimmedLine.replace(/^\s*•\s*/, '').trim()
                                            currentBullet = { title, desc: [] }
                                        } else if (currentBullet && trimmedLine) {
                                            // 현재 불릿의 설명 추가
                                            currentBullet.desc.push(trimmedLine)
                                        }
                                    })
                                    
                                    // 마지막 불릿 항목 저장
                                    if (currentBullet) {
                                        bullets.push(currentBullet)
                                    }
                                    
                                    // 모든 불릿 항목 렌더링
                                    return (
                                        <div key={index} className="space-y-2">
                                            {bullets.map((bullet, bulletIndex) => (
                                                <div key={bulletIndex} className="flex gap-3 mb-4">
                                                    <span className="text-foreground font-semibold flex-shrink-0 mt-0.5">•</span>
                                                    <div>
                                                        <div className="text-foreground font-semibold">{bullet.title}</div>
                                                        {bullet.desc.length > 0 && (
                                                            <div className="text-muted-foreground mt-1">
                                                                {bullet.desc.join(' ')}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                                
                                // 일반 단락
                                return (
                                    <p key={index} className="mb-4 last:mb-0 leading-relaxed">
                                        {paragraph}
                                    </p>
                                )
                            })}
                            <span className="typing-cursor"></span>
                        </div>
                    </div>
                </div>
            </div>
        </MobileLayout>
    )
}