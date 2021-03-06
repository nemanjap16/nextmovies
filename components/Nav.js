import movieRequests from "../utility/movieRequests";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="mt-12 mb-20">
      <div className="flex justify-center px-10 sm:px-20 whitespace-nowrap space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(movieRequests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`trendings/?genre=${key}`)}
            className="cursor-pointer hover:text-white transition duration-150 transform hover:scale-110"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
