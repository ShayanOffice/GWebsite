import "../styles/globals.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  );
}

export default MyApp;
