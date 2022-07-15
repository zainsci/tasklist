import Head from "next/head"
import { AppProps } from "next/app"
import { Provider } from "react-redux"

import "../styles/globals.css"
import store from "@store/index"
import { basePath } from "config"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>TaskList</title>

        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${basePath}/favicon.ico?v=2`}
        />
        <link
          href={`${basePath}/icons/icon-16x16.png`}
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href={`${basePath}/icons/icon-32x32.png`}
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href={`${basePath}/apple-icon.png`}></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
