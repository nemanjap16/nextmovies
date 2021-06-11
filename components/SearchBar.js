// import env from "../utility/env";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="flex mt-10 justify-center">
      <input
        onChange={(e) => router.push(`movies/?movie_name=${e.target.value}`)}
        type="text"
        placeholder="search movies..."
        className="bg-input rounded-xl w-50 sm:w-80 sm:focus:w-96  px-5 py-1  duration-300 ease-in-out outline-none"
      />
    </div>
  );
}
