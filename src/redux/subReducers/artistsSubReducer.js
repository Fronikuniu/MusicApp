const createActionName = function (name) {
  return `app/artists/${name}`;
};

const ADD_ARTIST = createActionName('ADD_ARTIST');

//Selectors
export const getAllArtists = (state) => [...state.artists];
export const getArtistCount = (state) => state.artists.length;

//Action creators
export const addArtist = (payload) => ({ type: ADD_ARTIST, payload });

export default function artistsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
