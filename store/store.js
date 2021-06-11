import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/movieSlice";
import collectionReducer from "../store/collectionSlice";

export default configureStore({
  reducer: {
    movies: movieReducer,
    moviesCollection: collectionReducer,
  },
});
