const createActionName = function (name) {
  return `app/songs/${name}`;
};

const ADD_SONG = createActionName('ADD_SONG');

//Selectors
export const getAllSongs = (state) => {
  return state.songs.map((song) => ({
    ...song,
    author: state.artists.find((artist) => song.author === artist.id).name,
  }));
};
export const getSongCount = (state) => state.songs.length;

//Action creators
export const addSong = (payload) => ({ type: ADD_SONG, payload });

export default function songsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
