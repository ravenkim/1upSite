import { useLanguage } from '../hooks/useLanguage';

export default function ArtistPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome_artist')}</h1>
    </div>
  );
}
