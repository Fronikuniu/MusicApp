import ReactAudioPlayer from 'react-audio-player'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const MusicPlayer = ({ title, author, filename, className = '', startAt = 20 }) => {

    const handlePlayer = (e) => {
        console.log(e)
        if(e && e.audioEl) {
            console.log(e.audioEl.current)
            const player = e.audioEl.current
            player.currentTime = startAt
            player.play()
        }
    }

    return (
        <div className={clsx(className)}>
            <ReactAudioPlayer
                className="focus:outline-none"
                ref={handlePlayer}
                src={process.env.PUBLIC_URL + '/songs/' + filename}
                autoPlay
                controls
            />
        </div>
    )
}

MusicPlayer.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    startAt: PropTypes.number
}

export default MusicPlayer