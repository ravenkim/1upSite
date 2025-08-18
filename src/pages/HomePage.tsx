import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function HomePage() {
    return (
        <MobileLayout>
            <div className="h-full w-full flex flex-col items-center justify-center px-4 py-8">
                <img
                    src="https://lh3.googleusercontent.com/d/1ttlkxdwb6zlGz8GJF-gEj6O9NmciX421"
                    alt="main image"
                    className="mb-6 rounded-2xl shadow-lg"
                />



                    <div className="max-w-xl text-center rounded-2xl border border-border bg-card p-8 shadow-md ring-1 ring-border/50 backdrop-blur">

                        {/* 제목 */}
                        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                            1UP LABEL 소개 글
                        </h2>

                        {/* 본문 */}
                        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                            <p>
                                 <span className="font-bold text-foreground"> 1UP LABEL</span>은  아티스트, 프로듀서, DJ, 엔지니어, 크리에이터 등 음악을 둘러싼 다양한 주체들이 모여 만들어진
                                <span className="font-bold text-foreground"> 커뮤니티형 뮤직 레이블</span>입니다.
                                우리는 전통적인 레이블의 방식에 머무르지 않고, 인터넷 문화와 라이브 스트리밍 트렌드를 선도하며,
                                <span className="font-bold text-foreground"> 음악과 콘텐츠가 함께 공존하는 새로운 생태계</span>를 지향합니다.
                            </p>

                            <p>
                                1UP LABEL은 단순히 음악을 제작하고 유통하는 곳이 아닙니다.
                                서로 다른 개성을 가진 멤버들이 모여 아이디어를 교환하고, 실험적인 프로젝트를 실행하며,
                                <span className="font-bold text-foreground"> 관객과 실시간으로 소통하는 무대와 플랫폼</span>을 만들어갑니다.
                            </p>

                            <p>
                                <span className="font-bold text-foreground">우리의 목표는 더 많은 사람들이 음악과 문화를 자유롭게 즐기고 참여할 수 있는 열린 공간(Open Community)을 구축하는 것</span>입니다.
                                1UP LABEL은 그 중심에서,
                                <span className="font-bold text-foreground"> 새로운 세대를 위한 창작과 경험을 계속 확장</span>해 나가고 있습니다.
                            </p>
                        </div>
                    </div>

            </div>
        </MobileLayout>
    )
}
