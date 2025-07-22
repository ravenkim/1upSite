import React from 'react'
import SSmobile from 'src/shared/layouts/SSmobile.tsx'
import CircularGallery from 'src/shared/lib/reactBits/CircularGallery.tsx';
import Timeline from 'src/shared/components/Timeline.tsx';

const HistoryPage = () => {
  const historyItems = [
    { year: 2024, month: 2, description: '출시' },
    { year: 2024, month: 4, description: '어디 공연' },
    { year: 2026, month: 1, description: '무슨 수상' },
  ];
  return (
      <SSmobile>
          <div
            className={'w-full p-3 flex flex-col'}
          >

              <h3 className="   tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">Welcome
                  to our label</h3>
              <p className="text-base font-normal leading-normal pb-3 pt-1 px-4">
                  We are a record label that focuses on discovering and promoting new artists. We are passionate about
                  music and believe in the power of music to connect people.
              </p>


              <h3 className="   tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">연혁</h3>
              {/* 연혁 타임라인 추가 */}
              <Timeline items={historyItems} />
              <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5">협동 앨범</h2>

              {/* 아래에 CircularGallery 예시 추가 */}
              <div
                  style={{
                      width: '100%',
                      position: 'relative',
                      paddingTop: '100%',
                  }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <CircularGallery
                    items={[
                      { image: 'https://picsum.photos/seed/100/800/600?grayscale', text: 'History Example 1' },
                      { image: 'https://picsum.photos/seed/101/800/600?grayscale', text: 'History Example 2' },
                      { image: 'https://picsum.photos/seed/102/800/600?grayscale', text: 'History Example 3' }
                    ]}
                    bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
                  />
                </div>
              </div>




          </div>
      </SSmobile>
  )
}

export default HistoryPage
