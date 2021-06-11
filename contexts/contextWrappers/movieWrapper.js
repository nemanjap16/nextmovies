import { useState } from "react";
import MovieContext from "../movieContext";

export const MovieWrapper = ({ children, movies }) => {
  const [data, setData] = useState(movies);

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
