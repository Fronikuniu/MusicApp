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
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-900 mb-3">{song.title}</h1>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-900">{song.author}</h2>
      <MusicPlayer className="mt-6" id={song.id} author={song.author} title={song.title} filename={song.filename} />
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
