import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Thumbnail({ movie, index }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="group rounded-md bg-input overflow-hidden cursor-pointer m-3 transition duration-150 ease-in-out transform sm:hover:scale-105 hover:z-10">
      <Image
        layout="responsive"
        src={
          `${BASE_PATH}${
            movie[index].backdrop_path || movie[index].poster_path
          }` || `${BASE_PATH}${movie.poster_path}`
        }
        width={1920}
        height={1080}
      />
      <div className="px-4 py-6">
        <h2 className="text-2xl mb-2 transition-all duration-150 easy-in-out">
          {movie[index].title || movie[index].original_name}
        </h2>
        <p className="text-gray-400 ">{movie[index].overview}</p>
        <p className="flex mt-3 justify-end transition-all duration-150 easy-in-out opacity-0 group-hover:opacity-100">
          <span className="mr-6">
            {movie[index].release_date || movie[index].first_air_date}
          </span>
          <ThumbUpIcon className="h-5 mr-2" />
          {movie[index].vote_count}
        </p>
      </div>
    </div>
  );
}
