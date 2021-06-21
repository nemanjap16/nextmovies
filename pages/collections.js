import { useEffect, useState } from "react";
import Thumbnail from "../components/Thumbnail";
import Link from "next/link";
import Head from "next/head";

export default function Collections() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(
      localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies"))
        : []
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Watchlist</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>

      <h2 className="text-3xl mt-8 uppercase opacity-50 text-center font-bold tracking-wider">
        Watchlist
      </h2>
      <div className="p-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <a>
              <Thumbnail key={movie.id} movie={movie} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
