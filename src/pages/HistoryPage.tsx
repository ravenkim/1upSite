import { useLanguage } from '../hooks/useLanguage';

export default function HistoryPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome.history')}</h1>
    </div>
  );
}
