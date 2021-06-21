import Head from "next/head";
import SearchBar from "../components/SearchBar";
import ShowMovies from "../components/ShowMovies";

export default function SearchMovies({ movies }) {
  if (movies.length) {
    return (
      <div>
        <Head>
          <title>Search for movie</title>
          <meta name="description" content="Next Movie App" />
          <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
        </Head>
        <SearchBar />
        <ShowMovies movies={movies} />
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>Search for movie</title>
          <meta name="description" content="Next Movie App" />
          <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
        </Head>

        <SearchBar />
        <h1 className="text-xl sm:text-4xl mt-40 uppercase opacity-50 italic text-center font-extrabold tracking-wider">
          search for movie...
        </h1>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const movie = context.query.movie_name || "";
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false
      }`
    );
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
