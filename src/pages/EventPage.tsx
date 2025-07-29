import { useLanguage } from '../hooks/useLanguage'
import MobileLayout from '@/layouts/MobileLayout.tsx'

export default function EventPage() {
    const { t } = useLanguage()
    return (
        <MobileLayout>
            <div>
                <h1>{t('welcome.event')}</h1>
            </div>
        </MobileLayout>
    )
}
