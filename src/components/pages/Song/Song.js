import PageTitle from '../../layout/PageTitle/PageTitle'
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer'

const Song = () => (
    <section className="page">
        <PageTitle>Song</PageTitle>
        <MusicPlayer className="mt-6" title="At The Top" author="David Renda" filename="At_The_Top_David_Renda.mp3" />
    </section>
)

export default Song