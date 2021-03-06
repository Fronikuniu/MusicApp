import { connect } from 'react-redux';
import { getAllArtists } from '../../../redux/subReducers/artistsSubReducer';
import List from '../../layout/List/List';
import ListItem from '../../layout/ListItem/ListItem';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists }) => (
  <List>
    {artists.map((artist) => (
      <ListItem key={artist.id}>
        <div>{artist.id}</div>
        <div className="font-semibold">{artist.name}</div>
        <div>{artist.songsAmount} songs</div>
      </ListItem>
    ))}
  </List>
);

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  artists: getAllArtists(state),
});

export default connect(mapStateToProps)(ArtistsList);
