import React, { useState, useEffect, useRef } from 'react';
import { type Product, products } from '@/data/products.ts';
import { useLanguage } from '@/hooks/useLanguage.ts';

type DragState = {
    isDragging: boolean;
    startX: number;
    lastX: number;
    velocityX: number;
    lastTime: number;
};

const ProductShowcase: React.FC = () => {
    const { language } = useLanguage();
    const sphereRef = useRef<HTMLDivElement | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [rotationY, setRotationY] = useState<number>(0);

    const dragState = useRef<DragState>({
        isDragging: false,
        startX: 0,
        lastX: 0,
        velocityX: 0,
        lastTime: 0,
    });

    const getSphericalPosition = (index: number, total: number, radius = 200) => {
        const phi = Math.acos(-1 + (2 * index) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return { x, y, z };
    };

    useEffect(() => {
        let animationId: number;

        const animate = () => {
            if (!dragState.current.isDragging) {
                dragState.current.velocityX *= 0.98;
                if (Math.abs(dragState.current.velocityX) > 0.1) {
                    setRotationY(prev => prev + dragState.current.velocityX);
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX =
            'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

        dragState.current.isDragging = true;
        dragState.current.startX = clientX;
        dragState.current.lastX = clientX;
        dragState.current.lastTime = Date.now();
    };

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragState.current.isDragging) return;

        const clientX =
            'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

        const deltaX = clientX - dragState.current.lastX;
        const now = Date.now();
        const deltaTime = now - dragState.current.lastTime;

        if (deltaTime > 0) {
            dragState.current.velocityX = (deltaX / deltaTime) * 10;
        }

        setRotationY(prev => prev + deltaX * 0.5);
        dragState.current.lastX = clientX;
        dragState.current.lastTime = now;
    };

    const handleEnd = () => {
        dragState.current.isDragging = false;
    };

    return (
        <div className="relative w-full h-[550px] bg-black overflow-hidden my-4">
            <div
                className="absolute inset-0 flex items-center justify-center"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                style={{ perspective: '1000px' }}
            >
                <div
                    ref={sphereRef}
                    className="relative"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotationY}deg)`,
                        width: 400,
                        height: 400,
                    }}
                >
                    {products.map((product, index) => {
                        const pos = getSphericalPosition(index, products.length);
                        return (
                            <div
                                key={product.id}
                                className="absolute w-24 h-24 cursor-pointer z-10 transition-transform duration-300"
                                style={{
                                    transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) rotateY(${Math.atan2(
                                        pos.x,
                                        pos.z
                                    ) * (180 / Math.PI)}deg) scale(1)`,
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: '-40px',
                                    marginTop: '-40px',
                                }}
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="w-full aspect-square border-2 border-border rounded-xl overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title[language]}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedProduct && (
                <div className="absolute inset-0 bg-black/90 z-40 flex items-end">
                    <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
                        <div className="relative mb-6">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title[language]}
                                className="w-full h-64 object-cover rounded-2xl"
                            />
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/70 text-white rounded-full text-xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="text-white space-y-4">
                            <h2 className="text-2xl font-bold">{selectedProduct.title[language]}</h2>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold">{selectedProduct.price}</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                {
                                    language === 'ko' ?
                                        `프리미엄 품질의 ${selectedProduct.title.ko}입니다. 세련된 디자인과 탁월한 기능으로 일상에 가치를 더해보세요.` :
                                        `This is a premium quality ${selectedProduct.title.en}. Add value to your daily life with its stylish design and excellent features.`
                                }
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductShowcase;
