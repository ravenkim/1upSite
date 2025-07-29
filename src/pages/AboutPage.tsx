import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function AboutPage() {
    const { t } = useLanguage()
    return (
        <MobileLayout>
            <div>
                <h1>{t('welcome.about')}</h1>
                <Link to="/">{t('home')}</Link>
            </div>
        </MobileLayout>
    )
}
