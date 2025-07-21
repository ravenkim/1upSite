import mainImage from 'src/assets/images/main2.jpg'

const Home = () => {
    return (
        <div 
            className="relative h-[calc(100dvh-80px)]"
            style={{ 
                backgroundImage: `url(${mainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 space-y-6 h-full bg-gradient-to-t from-black/20 to-transparent">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        🔥
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter text-white">1UP</h1>
                </div>
                <p className="text-base font-normal leading-relaxed text-gray-200">
                    1UP은 커뮤니티 기반의 크리에이티브 집단으로, 매주 라이브 스트리밍을 통해 팬들과 소통하며 대한민국 음악 씬에 새로운 작업 방식과 에너지를 제시하고 있습니다.
                </p>
            </div>
        </div>
    );
}

export default Home
