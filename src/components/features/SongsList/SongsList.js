import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllSongs } from '../../../redux/subReducers/songsSubReducer';
import List from '../../layout/List/List';
import ListItem from '../../layout/ListItem/ListItem';
import PropTypes from 'prop-types';

const SongsList = ({ songs }) => {
  return (
    <List>
      {songs.map((song) => (
        <ListItem key={song.id}>
          <div>{song.id}</div>
          <div className="font-semibold">{song.title}</div>
          <div>by {song.author}</div>
          <Link
            to={'/play/' + song.id}
            className="ml-auto focus:outline-none rounded-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  songs: getAllSongs(state),
});

export default connect(mapStateToProps)(SongsList);
