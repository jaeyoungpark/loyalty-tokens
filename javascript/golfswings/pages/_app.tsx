import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "./styles/globals.css";

// chainId for dApp to work on
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // enable gasless minting using OZdefender relayer
    <ThirdwebProvider sdkOptions={{
      gasless: {
        openzeppelin: {
          relayerUrl:process.env.NEXT_PUBLIC_OPENZEPPELIN_URL!,
        },
      },
    }}
    desiredChainId={activeChainId}>
      <Head>
        <title>Lazy Gasless Minting via thirdweb signature minting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Lazy Gasless Signature based minting on an NFT Collection contract"
        />
        <meta name="keywords" content="Lazy Gasless Signature based minting" />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
