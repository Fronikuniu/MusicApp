import { connect } from 'react-redux';
import { getSongInfoById } from '../../../redux/subReducers/songsSubReducer';
import PageTitle from '../../layout/PageTitle/PageTitle';
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

const Song = ({ song }) => {
  //   let { songId } = useParams();
  //   songId = parseInt(songId);
  //   const song = songs.find(({ id }) => id === songId);

  return (
    <section className="page">
      <PageTitle>Song:</PageTitle>
      <h1 className="text-2xl font-semibold text-blue-400 mb-5 mt-3">{` { ${song.id} } - ${song.title}`}</h1>
      <MusicPlayer className="mt-6" title={song.title} id={song.id} filename={song.filename} />
    </section>
  );
};

Song.propTypes = {
  song: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  song: getSongInfoById(state, props),
});

export default connect(mapStateToProps)(Song);
