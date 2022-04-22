import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  removeMovie,
  selectMovies,
} from "../../store/collectionSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Details({ movie }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/original`;
  const imageUrl = movie.backdrop_path
    ? `${BASE_PATH}${movie.backdrop_path}`
    : `/movie.jpg`;

  const popularity = movie.vote_average * 10 || 0;

  const dispatch = useDispatch();
  const router = useRouter();

  const { moviesCollection } = useSelector(selectMovies);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!moviesCollection == []) {
      localStorage.setItem("movies", JSON.stringify(moviesCollection));
    }
    let storedMovies = moviesCollection.find((el) => el.id === movie.id);
    let inCollection = storedMovies ? true : false;
    setDisabled(inCollection);
  }, [moviesCollection]);

  const addToWatchlist = () => {
    dispatch(addMovie(movie));
    toast.success("Added to watch list");
  };

  const removeFromWatchlist = () => {
    dispatch(removeMovie(movie.id));
    toast.warning("Removed from watch list");
  };

  return (
    <div className="h-full grid">
      <ToastContainer autoClose={3000} />
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>

      <h1 className="text-xl sm:text-4xl uppercase opacity-50 text-center font-extrabold tracking-wider">
        movie details
      </h1>

      <div className="bg-input mt-6 rounded-md overflow-hidden grid grid-rows-1  lg:grid-cols-3">
        <div className="object-cover h-96 lg:h-auto relative lg:col-span-1 bg-green-700">
          <Image
            layout="fill"
            src={imageUrl}
            loading={"eager"}
            className="object-cover absolute"
          />
        </div>
        <div className="p-10 lg:col-span-2">
          <h1 className="text-2xl uppercase font-bold">
            {movie.original_title}
          </h1>
          {movie.genres &&
            Object.keys(movie.genres).map((key) => (
              <h4 key={key} className="text-green-300 inline-block mt-3 mr-3">
                {movie.genres[key].name}
              </h4>
            ))}
          <h2 className="text-xl opacity-80 mt-6 mb-4 italic">
            {movie.tagline}
          </h2>
          <p className="mb-4">{movie.overview}</p>
          <p className="font-normal italic mb-2">
            Release Year:{" "}
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </p>
          <p className="font-normal italic">
            Runtime: {movie.runtime ? movie.runtime : "-"} min.
          </p>
          <hr className="mt-4" />
          {/*  */}
          <div className="w-full grid grid-cols-1 justify-items-center md:flex items-center  justify-between  mt-8">
            <div
              style={{ width: "70px", height: "70px" }}
              className="bg-green-900 rounded-full p-1 font-bold mb-4 md:mb-0 grid place-items-center"
            >
              <CircularProgressbar
                value={popularity}
                text={`${popularity}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  textSize: "24px",
                  textColor: "#fff",
                  pathColor: "#21d07a",
                })}
              />
            </div>
            <div className="grid grid-cols-1 justify-items-center md:flex ">
              <button
                disabled={disabled}
                onClick={() => addToWatchlist()}
                className="button text-xs md:text-base outline-none md:mr-10 mb-5 md:mb-0 disabled:opacity-50"
              >
                Add to watch list
              </button>

              <button
                disabled={!disabled}
                onClick={() => removeFromWatchlist()}
                className="button text-xs md:text-base outline-none disabled:opacity-50"
              >
                Remove from watch list
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        style={style.button}
        className="mt-8 text-xl cursor-pointer"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>
    </div>
  );
}

const style = {
  button: {
    width: "100px",
    padding: "10px",
    backgroundColor: "#12485e",
    marginLeft: "auto",
    borderRadius: "6px",
  },
};

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`;

    const res = await fetch(url);
    const movie = await res.json();

    return {
      props: {
        movie: movie || [],
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
