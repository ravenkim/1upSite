import Home from 'src/features/Home.tsx'
import SSmobile from 'src/shared/layouts/SSmobile.tsx'
import SSmobileHeader from 'src/shared/layouts/SSmobileHeader.tsx'

const HomePage = () => {
    return (
        <SSmobile
            header={
            <SSmobileHeader
                title="1UP"
            />}
        >
            <Home />
        </SSmobile>
    )
}

export default HomePage
