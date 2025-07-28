import { useLanguage } from '../hooks/useLanguage';
import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function HistoryPage() {
  const { t } = useLanguage();
  return (
      <MobileLayout>
          <div>
              <h1>{t('welcome.history')}</h1>
          </div>
      </MobileLayout>
  );
}
