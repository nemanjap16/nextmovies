import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";
import { MovieWrapper } from "../contexts/contextWrappers/movieWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MovieWrapper>
        <Component {...pageProps} />
      </MovieWrapper>
    </Provider>
  );
}

export default MyApp;
