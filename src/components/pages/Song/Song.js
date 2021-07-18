import PageTitle from '../../layout/PageTitle/PageTitle';
import MusicPlayer from '../../features/MusicPlayer/MusicPlayer';
import { connect } from 'react-redux';
import { getAllSongs } from '../../../redux/subReducers/songsSubReducer';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Song = ({ songs }) => {
  let { songId } = useParams();
  songId = parseInt(songId);

  const result = songs.find(({ id }) => id === songId);

  return (
    <section className="page">
      <PageTitle>Song:</PageTitle>
      <MusicPlayer className="mt-6" title={result.title} author={result.author} filename={result.filename} />
    </section>
  );
};

Song.propTypes = {
  songs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  songs: getAllSongs(state),
});

export default connect(mapStateToProps)(Song);
