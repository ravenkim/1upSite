import { useLanguage } from '../hooks/useLanguage';

export default function EventPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome_event')}</h1>
    </div>
  );
}
