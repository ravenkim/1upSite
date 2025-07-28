import { useLanguage } from '../hooks/useLanguage';
import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function GoodsPage() {
  const { t } = useLanguage();
  return (
      <MobileLayout>
        <div>
          <h1>{t('welcome.goods')}</h1>


          <div
              className={'w-full h-[500000px]'}
          />
        </div>
      </MobileLayout>
  );
}
