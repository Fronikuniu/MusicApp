import PageTitle from '../../layout/PageTitle/PageTitle';
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import { connect } from 'react-redux';
import { getSongInfoById } from '../../../redux/subReducers/songsSubReducer';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Song = ({ song }) => {
  //   let { songId } = useParams();
  //   songId = parseInt(songId);
  //   const song = songs.find(({ id }) => id === songId);

  return (
    <section className="page">
      <PageTitle>Song:</PageTitle>
      <MusicPlayer className="mt-6" title={song.title} id={song.id} filename={song.filename} />
    </section>
  );
};

Song.propTypes = {
  song: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  song: getSongInfoById(state, parseInt(props.match.params.songId)),
});

export default connect(mapStateToProps)(Song);
