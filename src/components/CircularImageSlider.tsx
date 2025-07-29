import React, { useEffect, useState } from "react";

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
    const [rotationAngle, setRotationAngle] = useState(0);
    const [itemSize, setItemSize] = useState(250);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const calculatedSize = Math.min(200, Math.floor(screenWidth * 0.6));
            setItemSize(calculatedSize);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cellCount = images.length;
    const rotateYDeg = 360 / cellCount;
    const baseRadius = itemSize / (2 * Math.tan(Math.PI / cellCount));
    const radius = baseRadius * 1.3;

    const next = () => {
        setRotationAngle((prev) => prev - rotateYDeg);
    };

    const prev = () => {
        setRotationAngle((prev) => prev + rotateYDeg); 
    };

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center perspective-[1000px]">
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
                style={{
                    width: `${itemSize * 2}px`,
                    height: `${itemSize * 1.2}px`,
                    // 누적 회전 각도 사용
                    transform: `translateZ(-${radius}px) rotateY(${rotationAngle}deg)`,
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
                                height: `${itemSize}px`,
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <img
                                src={src}
                                alt={`Slide ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
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