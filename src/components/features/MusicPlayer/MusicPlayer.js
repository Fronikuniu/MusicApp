import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MusicPlayer = ({ title, id, filename, className = '', startAt = 0 }) => {
  const handlePlayer = (e) => {
    console.log(e);
    if (e && e.audioEl) {
      console.log(e.audioEl.current);
      const player = e.audioEl.current;
      player.currentTime = startAt;
      console.log(player.currentTime);
      player.play();
    }
  };

  return (
    <div className={clsx(className)}>
      <h1 className="text-2xl font-semibold text-blue-400 mb-5">{` { ${id} } - ${title}`}</h1>
      <ReactAudioPlayer className="focus:outline-none" ref={handlePlayer} src={process.env.PUBLIC_URL + '/songs/' + filename} autoPlay controls />
    </div>
  );
};

MusicPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  startAt: PropTypes.number,
};

export default MusicPlayer;
