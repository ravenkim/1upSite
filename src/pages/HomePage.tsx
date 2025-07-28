import main2 from '../assets/images/main2.jpg'
import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function HomePage() {
  return (
      <MobileLayout>
        <div
            className={'w-full h-full'}
        >
          <img src={main2} alt="main image" />.

        </div>
      </MobileLayout>
  )
}
