import Thumbnail from "./Thumbnail";
import Link from "next/link";

export default function Movies({ movies }) {
  return (
    <div className="p-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <a>
            <Thumbnail key={movie.id} movie={movie} />
          </a>
        </Link>
      ))}
    </div>
  );
}
