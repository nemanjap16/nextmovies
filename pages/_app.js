import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import store from "../store/store";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { MovieWrapper } from "../contexts/contextWrappers/movieWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MovieWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MovieWrapper>
    </Provider>
  );
}

export default MyApp;
