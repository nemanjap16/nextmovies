import Head from "next/head";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import movieRequest from "../utility/movieRequests";

export default function Home({ movie }) {
  return (
    <>
      <Head>
        <title>Next Movie App</title>
        <meta name="description" content="Next Movie App" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <Header />
      <Nav />
      <Movies movie={movie} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const genre = context.query.genre;
    const data = await fetch(
      `https://api.themoviedb.org/3${
        movieRequest[genre]?.url || movieRequest.trending.url
      }`
    ).then((res) => res.json());

    return {
      props: {
        movie: data.results,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
