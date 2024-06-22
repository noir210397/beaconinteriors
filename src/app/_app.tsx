import { AppProps } from "next/app";
import RootLayout from "./layout"; // Adjust the path as needed
import "../styles/globals.css"; // Adjust the path to your global styles
import { Provider } from "react-redux";
import { store } from "../store/store"; // Adjust the path as needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
