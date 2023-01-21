import Link from "next/link";
import { useRouter } from "next/router";
import HeaderItems from "./HeaderItems";
import {
  HomeIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const router = useRouter();
  return (
    <header className="mt-4 lg:mt-0 flex flex-col items-center sm:flex-row">
      <div className="mb-4 md:mb-0 group">
        <Link href="/">
          <a>
            <h1 className="text-green-400 cursor-pointer uppercase text-3xl font-bold tracking-wide">
              next
              <span className="uppercase text-gray-200">movies</span>
            </h1>
          </a>
        </Link>
      </div>
      <div className="flex flex-grow justify-evenly sm:justify-end">
        <Link href="/">
          <a>
            {/* <HeaderItems title="HOME" Icon={HomeIcon} /> */}
            <div className="flex flex-col items-center cursor-pointer mt-2 sm:mr-6 group w-12 hover:text-white">
              <HomeIcon className="h-6 mb-1 group-hover:animate-bounce" />
              <p
                className={
                  router.pathname === "/"
                    ? "text-sm tracking-widest"
                    : "text-sm opacity-0 group-hover:opacity-100 tracking-widest"
                }
              >
                HOME
              </p>
            </div>
          </a>
        </Link>
        <Link href="/collections">
          <a>
            {/* <HeaderItems title="WATCHLIST" Icon={CollectionIcon} /> */}
            <div className="flex flex-col items-center cursor-pointer mt-2 sm:mr-6 group w-12 hover:text-white">
              <CollectionIcon className="h-6 mb-1 group-hover:animate-bounce" />
              <p
                className={
                  router.pathname === "/collections"
                    ? "text-sm tracking-widest"
                    : "text-sm opacity-0 group-hover:opacity-100 tracking-widest"
                }
              >
                LIST
              </p>
            </div>
          </a>
        </Link>
        <Link href="/trendings">
          <a>
            {/* <HeaderItems title="TRENDING" Icon={LightningBoltIcon} /> */}
            <div className="flex flex-col items-center cursor-pointer mt-2 sm:mr-6 group w-12 hover:text-white">
              <LightningBoltIcon className="h-6 mb-1 group-hover:animate-bounce" />
              <p
                className={
                  router.pathname === "/trendings"
                    ? "text-sm tracking-widest"
                    : "text-sm opacity-0 group-hover:opacity-100 tracking-widest"
                }
              >
                CATEGORY
              </p>
            </div>
          </a>
        </Link>
        <Link href="/movies">
          <a>
            {/* <HeaderItems title="MOVIE" Icon={SearchIcon} /> */}
            <div className="flex flex-col items-center cursor-pointer mt-2 sm:mr-6 group w-12 hover:text-white">
              <SearchIcon className="h-6 mb-1 group-hover:animate-bounce" />
              <p
                className={
                  router.pathname === "/movies"
                    ? "text-sm tracking-widest"
                    : "text-sm opacity-0 group-hover:opacity-100 tracking-widest"
                }
              >
                MOVIE
              </p>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
}
