// import env from "../utility/env";
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
    <header className="flex flex-col-reverse items-center md:flex-row justify-between">
      <div className="mb-4 md:mb-0 group">
        <Link href="/">
          <a>
            <h1 className="text-green-400 cursor-pointer uppercase text-3xl font-bold italic tracking-wide">
              next
              <span className="uppercase text-gray-200">movies</span>
            </h1>
          </a>
        </Link>
      </div>
      <div className="flex flex-grow justify-evenly sm:justify-end">
        <Link href="/">
          <a>
            <HeaderItems title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="/collections">
          <a>
            <HeaderItems title="WATCHLIST" Icon={CollectionIcon} />
          </a>
        </Link>
        <Link href="/trendings">
          <a>
            <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
          </a>
        </Link>
        <Link href="/movies">
          <a>
            <HeaderItems title="MOVIE" Icon={SearchIcon} />
          </a>
        </Link>
      </div>
    </header>
  );
}
