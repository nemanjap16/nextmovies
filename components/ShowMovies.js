import Thumbnail from "./Thumbnail";

export default function Movies({ movies }) {
  return (
    <div className="p-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
