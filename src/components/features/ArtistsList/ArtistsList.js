import List from '../../layout/List/List';
import ListItem from '../../layout/ListItem/ListItem';

import data from '../../../data/data';
const artists = data.artists;

const SongsList = () => (
  <List>
    {artists.map((artist) => (
      <ListItem key={artist.id}>
        <div>{artist.id}</div>
        <div className="font-semibold">{artist.name}</div>
        <div>?? songs</div>
      </ListItem>
    ))}
  </List>
);

export default SongsList;
