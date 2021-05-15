import Thumbnail from "./Thumbnail";

export default function Movies({ movie }) {
  return (
    <div className="p-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movie.map((item, i) => (
        <Thumbnail key={item.id} movie={movie} index={i} />
      ))}
    </div>
  );
}
