import React from 'react'
import SSmobile from 'src/shared/layouts/SSmobile.tsx'
import InfiniteMenu from 'src/shared/lib/reactBits/InfiniteMenu.tsx'


const items = [
    {
        image: 'https://picsum.photos/300/300?grayscale',
        link: 'https://google.com/',
        title: 'Item 1',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/400/400?grayscale',
        link: 'https://google.com/',
        title: 'Item 2',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/500/500?grayscale',
        link: 'https://google.com/',
        title: '',
        description: '1200원'
    },
    {
        image: 'https://picsum.photos/600/600?grayscale',
        link: 'https://google.com/',
        title: 'Item 4',
        description: 'This is pretty cool, right?'
    }
];


const GoodsPage = () => {
  return (
    <SSmobile
        header={   <div className="text-center text-gray-600 mb-4">
            <p>문의 계정: <a href="https://instagram.com/asdf213" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@asdf213</a></p>
        </div>}
    >

        <div style={{ height: '800px', position: 'relative' }}>
            <InfiniteMenu items={items}/>
        </div>
    </SSmobile>
  )
}

export default GoodsPage 