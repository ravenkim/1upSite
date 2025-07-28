import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1>{t('welcome_about')}</h1>
      <Link to="/">{t('home')}</Link>
    </div>
  )
}
