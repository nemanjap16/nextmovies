import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  const submitSearch = (e) => {
    if (e.code === "Enter") {
      router.push(`movies/?movie_name=${e.target.value}`);
    }
  };

  return (
    <div className="flex mt-10 justify-center">
      <input
        onKeyPress={(e) => submitSearch(e)}
        type="text"
        placeholder="Type & press enter"
        className="bg-input rounded-xl w-50 sm:w-80 sm:focus:w-96 px-5 py-1 duration-300 ease-in-out outline-none"
      />
    </div>
  );
}
