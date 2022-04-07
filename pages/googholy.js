import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import BGCurves from "../components/BGCurves";
import BlobOverlay from "../components/BlobOverlay";
import AnimatedBlob from "../components/AnimatedBlob";
import useHandleFullscreen from "../hooks/useHandleFullscreen";
import Particles from "../components/Particles";

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .content {
    /* pointer-events: none; */
    cursor: pointer;
    z-index: 51;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Luckiest Guy", cursive;
    text-shadow: 1px 1px 10px gray;
    h1 {
      z-index: 51;
      font-size: 10rem;
    }
    h2 {
      z-index: 51;
      font-family: "Indie Flower", cursive;
      font-size: 5rem;
      font-weight: bold;
      line-height: 1rem;
      margin-bottom: 6rem;
    }
    h3,
    p {
      z-index: 51;
      line-height: 1.5rem;
      font-family: "Gamja Flower", cursive;
      font-weight: bold;
      font-size: 2rem;
    }

    @media (max-width: 1540px) {
      h1 {
        font-size: 6.5rem;
      }
      h2 {
        font-size: 3.5rem;
        margin-bottom: 2.5rem;
      }
      h3,
      p {
        font-size: 1.5rem;
      }
    }


    @media (max-width: 1200px) {
      h1 {
        font-size: 5rem;
      }
      h2 {
        font-size: 3rem;
        margin-bottom: 2.5rem;
      }
      h3,
      p {
        font-size: 1.3rem;
      }
    }
    margin: 0;

    color: #323;
  }
  @media (max-width: 768px) {
    height: 85vh;
  }
`;

export default function Home() {
  const router = useRouter();
  const HandleFullscreen = useHandleFullscreen(router);
  return (
    <Container>
      <Head>
        <title>GooGholy NFT Project</title>
        <meta
          name="description"
          content="GooGholy NFT Project Official Website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <link rel="icon" href="/svg/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Gamja+Flower&family=IM+Fell+English+SC&family=Indie+Flower&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="content"
        onClick={(e) => {
          var elem = document.documentElement;
          router.push("/nft/googholy/home");
          if (!document.fullscreenElement) {
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
              elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
            }
          }
        }}
      >
        <h1>GooGholy</h1>
        <h2>NFT Project</h2>
        <h3>press Enter</h3>
        <p>or Touch here</p>
      </div>
      <AnimatedBlob />
      <Particles />
      <BlobOverlay />
    </Container>
  );
}
