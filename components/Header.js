import { useEffect, useState } from "react";
import env from "../utility/env";

export default function Header() {
  const api_key = env.API_KEY;

  const [searchMovie, setSearchMovie] = useState("");
  const [movie, setMovie] = useState(null);

  const handleInput = async (movie) => {
    console.log(movie);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchMovie}&include_adult=false`;
    const response = await fetch(url)
      .then((res) => res.json())
      .then(() => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setMovie(response);
    setSearchMovie(movie);
    console.log(response);
  };

  useEffect(() => {
    handleInput();
  }, [handleInput]);

  return (
    <header className="flex flex-col items-center md:flex-row justify-between">
      <div className="mb-4 md:mb-0">
        <h1 className="text-green-400 uppercase text-3xl font-bold italic tracking-wide">
          next
          <span className="uppercase text-gray-200 ">movies</span>
        </h1>
      </div>
      <div>
        <input
          onChange={({ target }) => handleInput(target.value)}
          type="text"
          placeholder="search movies..."
          className="bg-input rounded-xl w-56 md:focus:w-80 px-5 py-1 duration-300 ease-in-out outline-none"
        />
      </div>
    </header>
  );
}
