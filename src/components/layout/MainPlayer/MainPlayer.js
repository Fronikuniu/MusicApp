import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentSong } from '../../../redux/subReducers/songsSubReducer';
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

const MainPlayer = ({ currentSong }) => {
  const location = useLocation();

  if (location.pathname.includes('play') || !currentSong.songId) return null;
  else
    return (
      <div className="fixed w-full p-6 bottom-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 rounded-md shadow-lg bt">
        <Container>
          <div className="flex justify-center items-center">
            <h2 className="text-lg text-white pr-5">Now playing:</h2>

            <MusicPlayer title={currentSong.title} author={currentSong.author} id={currentSong.id} filename={currentSong.filename} startAt={currentSong.time} />
            <div className="pl-5">
              <p className="text-2xl font-semibold text-indigo-700 mb-1">{currentSong.title}</p>
              <p className="text-xs font-semibold text-white">{currentSong.author}</p>
            </div>
          </div>
        </Container>
      </div>
    );
};

MainPlayer.propTypes = {
  currentSong: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentSong: getCurrentSong(state),
});

export default connect(mapStateToProps)(MainPlayer);
