import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Thumbnail({ movie, index }) {
  const BASE_PATH = `https://image.tmdb.org/t/p/w500`;
  const imageUrl = movie.backdrop_path
    ? `${BASE_PATH}${movie.backdrop_path}`
    : `/movie.jpg`;

  if (movie) {
    return (
      <div className="group relative rounded-md h-96 bg-input overflow-hidden cursor-pointer m-3 transition duration-150 ease-in-out transform sm:hover:scale-105 hover:z-10">
        <Image layout="responsive" src={imageUrl} width={1920} height={1080} />

        <div className="px-4 py-4">
          <h2 className="text-xl  mb-2 transition-all duration-150 easy-in-out">
            {movie.title || movie.original_name}
          </h2>
          <p className="text-gray-400 truncate">{movie.overview}</p>
          <p className="flex absolute bottom-4 right-4  transition-all duration-150 easy-in-out">
            {/* <span className="mr-6">
              {movie.release_date || movie.first_air_date}
            </span> */}
            <ThumbUpIcon className="h-5 mr-2" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
