const createActionName = function (name) {
  return `app/songs/${name}`;
};

const UPDATE_CURRENT_SONG = createActionName('ADD_SONG');

//Selectors
export const getAllSongs = (state) => {
  return state.songs.data.map((song) => ({
    ...song,
    author: state.artists.find((artist) => song.author === artist.id).name,
  }));
};
export const getSongCount = (state) => state.songs.data.length;
export const getSongInfoById = (state, props) => {
  let song = state.songs.data.find((song) => song.id === parseInt(props.match.params.songId));

  if (song) {
    song = JSON.parse(JSON.stringify(song));
    song.author = state.artists.find((artist) => artist.id === song.author).name;
  }
  return song;
};
export const getCurrentSong = (state) => state.songs.currentSong;

//Action creators
export const updateCurrentSong = (payload) => ({ type: UPDATE_CURRENT_SONG, payload });

export default function songsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      return {
        ...statePart,
        currentSong: action.payload,
      };
    default:
      return statePart;
  }
}
