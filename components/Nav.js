import movieRequests from "../utility/movieRequests";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="mt-12">
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(movieRequests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-150 transform hover:scale-110 hover:text-white active:text-red-400"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
