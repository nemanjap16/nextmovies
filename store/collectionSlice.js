import { createSlice } from "@reduxjs/toolkit";

if (typeof window !== "undefined") {
  let localStorageCollection = {
    movies: localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [],
  };
  var { movies } = localStorageCollection;
}

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    moviesCollection: movies || [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.moviesCollection.push(action.payload);
    },
    removeMovie: (state, { payload }) => {
      state.moviesCollection = state.moviesCollection.filter(
        (movie) => movie.id !== payload
      );
    },
    setCollection: (action) => {
      return action.payload;
    },
  },
});

export const { addMovie, removeMovie, setCollection } = collectionSlice.actions;

export const selectMovies = (state) => state.moviesCollection;

export default collectionSlice.reducer;
