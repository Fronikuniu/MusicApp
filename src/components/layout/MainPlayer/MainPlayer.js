import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentSong } from '../../../redux/subReducers/songsSubReducer';
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

const MainPlayer = ({ currentSong }) => {
  const location = useLocation();

  if (location.pathname.includes('play')) return null;
  else
    return (
      <div className="fixed w-full p-6 bottom-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 rounded-md shadow-lg bt">
        <Container>
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-lg mr-6 text-white">Now playing:</h2>
              <p className="text-lg font-semibold text-purple-600">{currentSong.title}</p>
            </div>
            <MusicPlayer title={currentSong.title} id={currentSong.id} filename={currentSong.filename} startAt={currentSong.time} />
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
