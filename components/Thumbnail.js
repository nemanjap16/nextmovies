import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie, selectMovies } from "../store/collectionSlice";
import Image from "next/image";
import {
  ThumbUpIcon,
  BookmarkIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Thumbnail({ movie, index }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/w500`;
  const imageUrl = movie.backdrop_path
    ? `${BASE_PATH}${movie.backdrop_path}`
    : `/movie.jpg`;

  const [show, setShow] = useState(false);

  const { moviesCollection } = useSelector(selectMovies);

  useEffect(() => {
    if (moviesCollection) {
      moviesCollection.map((item) => {
        if (item.original_title === movie.original_title) {
          setShow(true);
        }
      });
    }
    return () => {};
  }, [moviesCollection]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!moviesCollection == []) {
      localStorage.setItem("movies", JSON.stringify(moviesCollection));
    }
    let storedMovies = moviesCollection.find((el) => el.id === movie.id);
    let inCollection = storedMovies ? true : false;
    setShow(inCollection);
  }, [moviesCollection]);

  const addToWatchlist = (movie) => {
    if (movie) {
      dispatch(addMovie(movie));
      toast.success("Added to watch list");
    } else {
      toast.warning("Something went wrong!");
    }
  };

  const removeFromWatchlist = (id) => {
    if (id !== "") {
      dispatch(removeMovie(id));
      toast.warning("Removed from watch list");
    } else {
      toast.warning("Something went wrong!");
    }
  };

  if (movie) {
    return (
      <div>
        <ToastContainer autoClose={3000} />
        <div className="relative h-auto rounded-md  bg-input overflow-hidden m-3 transition duration-150 ease-in-out transform sm:hover:scale-105 hover:z-10">
          <Image layout="responsive" src={imageUrl} width={500} height={300} />
          <div className="px-4 py-4 h-auto">
            <h2 className="text-sm sm:text-xl  mb-2 truncate">
              {movie.title || movie.original_name}
            </h2>
            <p className="text-gray-400 truncate">{movie.overview}</p>
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center">
                <HeartIcon className="h-5 mr-2" style={{ color: "cyan" }} />
                <span className="font-bold">
                  {movie.vote_average ? movie.vote_average.toFixed(1) : null}
                </span>
              </div>
              <div className="flex items-center">
                <ThumbUpIcon className="h-5 mr-2" />
                {movie.vote_count}
              </div>
              {show ? (
                <CheckCircleIcon
                  style={{ color: "cyan" }}
                  className="h-6 cursor-pointer"
                  onClick={() => removeFromWatchlist(movie.id)}
                />
              ) : (
                <BookmarkIcon
                  className="h-5 cursor-pointer"
                  style={{ color: "cyan" }}
                  onClick={() => addToWatchlist(movie)}
                />
              )}
            </div>
          </div>
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <button style={style.button}>Show More</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

const style = {
  button: {
    padding: "10px",
    backgroundColor: "green",
    color: "#fff",
    margin: "0 auto",
    width: "100%",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
};
