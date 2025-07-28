import { useLanguage } from '../hooks/useLanguage';

export default function HistoryPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome_history')}</h1>
    </div>
  );
}
