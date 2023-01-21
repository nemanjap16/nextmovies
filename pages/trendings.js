import Head from "next/head";
import ShowMovies from "../components/ShowMovies";
import Nav from "../components/Nav";
import movieRequest from "../utility/movieRequests";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, selectMovies } from "../store/movieSlice";

export default function Trendings({ items }) {
  const dispatch = useDispatch();
  dispatch(setMovies(items));
  const movies = useSelector(selectMovies);
  return (
    <div>
      <Head>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
        <title>Trendings</title>
      </Head>
      {/* <h1 className="text-xl sm:text-4xl uppercase opacity-50 text-center font-extrabold tracking-wider">
        trendings
      </h1> */}
      <Nav />
      <ShowMovies movies={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const genre = context.query.genre;
    const URL = `https://api.themoviedb.org/3${
      movieRequest[genre]?.url || movieRequest.trending.url
    }`;
    const data = await fetch(URL);
    const movies = await data.json();
    return {
      props: {
        items: movies.results || [],
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
