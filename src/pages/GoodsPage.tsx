import { useLanguage } from '../hooks/useLanguage';

export default function GoodsPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome.goods')}</h1>



        <div
            className={'w-full h-[500000px]'}
        />
    </div>
  );
}
