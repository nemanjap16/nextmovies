import Head from "next/head";
import MainHeader from "../components/MainHeader";
import Image from "next/image";
import movieRequest from "../utility/movieRequests";
import ShowMovies from "../components/ShowMovies";
import ImgSlider from "../components/ImgSlider";

export default function Home({ movies }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/original`;
  const imageUrl = movies[0].backdrop_path
    ? `${BASE_PATH}${movies[0].backdrop_path}`
    : `/movie.jpg`;
  return (
    <div>
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <MainHeader />
      <div className="mt-6">
        <div className="relative mx-6">
          <ImgSlider movies={movies} />
          <div className="p-10 absolute bottom-0 left-0 right-0 bg-gray-700 opacity-90 text-white">
            <h1 className="text-2xl mb-3">
              Find movie to watch, add to collection, search for more details.
            </h1>
            <h2 className="text-xl">Millions movies, series and TV Shows.</h2>
          </div>
        </div>
      </div>

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
