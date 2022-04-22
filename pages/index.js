import Head from "next/head";

import movieRequest from "../utility/movieRequests";
import ShowMovies from "../components/ShowMovies";

export default function Home({ movies }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/original`;
  const imageUrl = movies[0].backdrop_path
    ? `${BASE_PATH}${movies[0].backdrop_path}`
    : `/movie.jpg`;
  return (
    <div className="h-full">
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <h1 className="text-xl sm:text-4xl uppercase opacity-50 text-center font-extrabold tracking-wider">
        movies
      </h1>
      <ShowMovies movies={movies} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const showmovie = `https://api.themoviedb.org/3${movieRequest.trending.url}`;
    const data = await fetch(showmovie);
    const movies = await data.json();
    return {
      props: {
        movies: movies.results || [],
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
