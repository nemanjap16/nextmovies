import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/collectionSlice";
import Thumbnail from "../components/Thumbnail";
import Head from "next/head";

export default function Collections() {
  const [movies, setMovies] = useState([]);
  const { moviesCollection } = useSelector(selectMovies);

  useEffect(() => {
    setMovies(moviesCollection);
    return () => setMovies([]);
  }, [moviesCollection]);

  return (
    <div>
      <Head>
        <title>Watchlist</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>

      {/* <h1 className="text-xl sm:text-4xl uppercase opacity-50 text-center font-extrabold tracking-wider">
        watch list
      </h1> */}
      <div className="p-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-4">
        {movies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
