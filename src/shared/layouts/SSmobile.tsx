import React from "react";
import SSmobileFooter from 'src/shared/layouts/SSmobileFooter.tsx'

interface SSmobileProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * 모바일 환경에 특화된 공통 레이아웃 컴포넌트
 * - 상단 헤더, 하단 네비게이션(푸터), 중앙 컨텐츠 영역
 * - 안전 영역(padding, notch 등) 고려
 * - TailwindCSS 적용
 */
const SSmobile: React.FC<SSmobileProps> = ({ header, footer, children }) => {
  return (
    <div
      className="min-h-[100dvh] max-w-md mx-auto flex flex-col bg-background text-foreground shadow-lg relative overflow-hidden border border-border"
    >
      {/* 상단 헤더 */}
      {header && (
        <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-4 py-3">
          {header}
        </header>
      )}
      {/* 중앙 컨텐츠 */}
      <main className="flex-1 px-4 py-4 overflow-y-auto">
        {children}
      </main>
      {/* 하단 네비게이션/푸터 */}

        <footer className="sticky bottom-0 z-10 bg-background/90 backdrop-blur border-t border-border ">
         <SSmobileFooter/>
        </footer>

    </div>
  );
};

export default SSmobile;
