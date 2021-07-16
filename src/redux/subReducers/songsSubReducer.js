const createActionName = function (name) {
  return `app/songs/${name}`;
};

const ADD_SONG = createActionName('ADD_SONG');

//Selectors
export const getAllSongs = (state) => [...state.songs];
export const getSongCount = (state) => state.songs.length;

//Action creators
export const addSong = (payload) => ({ type: ADD_SONG, payload });

export default function songsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
