import React from 'react'
import SSmobile from 'src/shared/layouts/SSmobile.tsx'
import InfiniteScroll from 'src/shared/components/InfiniteScroll'

// 임시 상품 데이터
const dummyProducts = [
  { id: 1, name: '상품 1', price: '10,000원', image: '/path/to/image1.jpg' },
  { id: 2, name: '상품 2', price: '20,000원', image: '/path/to/image2.jpg' },
  { id: 3, name: '상품 3', price: '15,000원', image: '/path/to/image3.jpg' },
  { id: 4, name: '상품 4', price: '25,000원', image: '/path/to/image4.jpg' },
  { id: 5, name: '상품 5', price: '30,000원', image: '/path/to/image5.jpg' },
].map(product => ({
  content: (
    <div className="bg-white rounded-lg shadow-md p-2 mx-2">
      <div className="bg-gray-200 h-32 rounded-md mb-1"></div>
      <h3 className="font-bold text-sm">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.price}</p>
    </div>
  )
}));

const GoodsPage = () => {
  return (
    <SSmobile
        header={   <div className="text-center text-gray-600 mb-4">
            <p>문의 계정: <a href="https://instagram.com/asdf213" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@asdf213</a></p>
        </div>}
    >

      <div className="flex flex-col items-center py-6">


          <div style={{height: '500px', position: 'relative'}}>
              <InfiniteScroll
                  items={dummyProducts}
                  isTilted={true}
                  tiltDirection='left'
                  autoplay={true}
                  autoplaySpeed={1}
                  autoplayDirection="down"
                  pauseOnHover={true}
              />
          </div>
      </div>
    </SSmobile>
  )
}

export default GoodsPage 