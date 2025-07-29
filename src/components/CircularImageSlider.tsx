import React, { useState } from "react";

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
];

const ThreeDCarousel: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const cellCount = images.length;
    const rotateYDeg = 360 / cellCount;

    const itemSize = 250; // 정사각형 사이즈
    const baseRadius = itemSize / (2 * Math.tan(Math.PI / cellCount));
    const radius = baseRadius * 1.2; // 여유 간격 확보

    const next = () => setSelectedIndex((prev) => (prev + 1) % cellCount);
    const prev = () => setSelectedIndex((prev) => (prev - 1 + cellCount) % cellCount);

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]">
            <div
                className="relative w-[700px] h-[300px] transition-transform duration-700"
                style={{
                    transform: `translateZ(-${radius}px) rotateY(-${selectedIndex * rotateYDeg}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {images.map((src, i) => {
                    const angle = rotateYDeg * i;
                    return (
                        <div
                            key={i}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl overflow-hidden bg-white"
                            style={{
                                width: `${itemSize}px`,
                                height: `${itemSize}px`, // ✅ 정사각형
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover" />
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <button
                    onClick={prev}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ThreeDCarousel;
