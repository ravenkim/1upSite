import main2 from '../assets/main2.jpg';
import { useLanguage } from '../hooks/useLanguage';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div
        className={'w-full h-full'}
    >
      <h1>{t('welcome.home')}</h1>
      <img src={main2} alt="main image" />
    </div>
  )
}
