import MusicPlayer from '../../features/MusicPlayer/MusicPlayer'
import Container from '../Container/Container'
import { useLocation } from 'react-router-dom'

const MainPlayer = () => {
    const location = useLocation()

    if(location.pathname.includes('play')) return null
    else return (
        <div className="fixed w-full p-6 bottom-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 rounded-md shadow-lg bt">
            <Container>
                <div className="flex justify-center items-center">
                    <h2 className="text-lg mr-6 text-white">Now playing</h2>
                    <MusicPlayer />
                </div>
            </Container>
        </div>
    )
}

export default MainPlayer