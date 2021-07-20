import { connect } from 'react-redux';
import { updateCurrentSong } from '../../../redux/subReducers/songsSubReducer';
import { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MusicPlayer = ({ id, author, title, filename, className = '', startAt = 0, updateCurrentSong }) => {
  let player = null;
  let currentTime = 0;

  useEffect(() => {
    return () => {
      updateCurrentSong({
        songId: id,
        author: author,
        title: title,
        filename: filename,
        time: currentTime,
      });
      player.removeEventListener('timeupdate', updateCurrentTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCurrentTime = () => {
    currentTime = player.currentTime;
  };

  const handlePlayer = (e) => {
    if (e && e.audioEl) {
      player = e.audioEl.current;
      player.addEventListener('timeupdate', updateCurrentTime);
      player.currentTime = startAt;
      player.play();
    }
  };

  return (
    <div className={clsx(className)}>
      <ReactAudioPlayer className="focus:outline-none" ref={handlePlayer} src={process.env.PUBLIC_URL + '/songs/' + filename} autoPlay controls />
    </div>
  );
};

MusicPlayer.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  filename: PropTypes.string,
  startAt: PropTypes.number,
  updateCurrentSong: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateCurrentSong: (data) => dispatch(updateCurrentSong(data)),
});

export default connect(null, mapDispatchToProps)(MusicPlayer);
