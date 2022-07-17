import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FpsView, useFps } from "react-fps";

import useHorizontalScroller from "../../../hooks/useHorizontalScroller";
import Particles from "../../../googholy/components/Particles";
import BGCurves from "../../../googholy/components/BGCurves";
import BlobOverlay from "../../../googholy/components/BlobOverlay";
import Dots from "../../../googholy/components/Dots";
import ProgressBar from "../../../googholy/components/ProgressBar";
import SideBar from "../../../googholy/components/SideBar";
import useHandleFullscreen from "../../../hooks/useHandleFullscreen";
import PoweredBy from "../../../googholy/components/PoweredBy";
import FirstPage from "../../../googholy/pages/FirstPage";
import Intro from "../../../googholy/pages/Intro";
import Details from "../../../googholy/pages/Details";
import RoadMap from "../../../googholy/pages/RoadMap";
import FuturePossibilities from "../../../googholy/pages/FuturePossibilities";
import WhoIsBOOMHUNK from "../../../googholy/pages/WhoIsBOOMHUNK";
import FAQ from "../../../googholy/pages/FAQ";
import SlideMenu from "../../../googholy/components/SlideMenu";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  overflow-y: hidden;
  @media (max-width: 768px) {
    height: 100vh;
  }
  .main {
    touch-action: pan-y;
    scroll-snap-type: x mandatory;
    /* scroll-behavior: smooth; */
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    background-color: #eef;
    display: flex;
    margin: 0;
    padding: 0;

    section {
      flex: none;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      .topLogo {
        /* position: absolute;
        top: 0; */
        width: 30%;
        /* min-width: 50px; */
        max-width: 220px;
      }
      @media (max-aspect-ratio: 32/40) {
        height: 95vh;
      }
      scroll-snap-align: start;
      z-index: 100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      background: none;
      transform-style: preserve-3d;
      perspective-origin: center;
    }
    h1 {
      /* font-family: "Luckiest Guy", cursive; */
      font-family: "Gloria Hallelujah", cursive;
      /* font-family: "Amatic SC", cursive; */
      /* font-family: 'Indie Flower', cursive; */
      /* font-family: 'IM Fell English SC', serif; */
      /* font-family: 'Gamja Flower', cursive; */

      margin: 0;
      font-size: xxx-large;
      color: #323;
      /* font-weight: bold; */
    }
  }
`;
const Borders = styled.div`
  pointer-events: none;
  border: 60px solid rgba(0, 0, 0, 1);
  border-bottom: none;
  border-radius: 80px;
  filter: blur(7px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw + 90px);
  height: calc(100vh + 90px);
  position: absolute;
  z-index: 100005;
`;

export default function Home() {
  const scrollerRef = useRef();
  const progressBarRef = useRef();
  const scrollPathRef = useRef();
  const bgRef = useRef();
  const { fps, avgFps, maxFps, currentFps } = useFps(620);
  const [pageCount, setPageCount] = useState({ count: 1, active: 0 });
  const [selectedDot, setSelectedDot] = useState(0);
  const [sensedClick, setSensedClick] = useState(0);
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);
  const HandleFullscreen = useHandleFullscreen();
  const horizontalScroller = useHorizontalScroller(
    scrollerRef,
    progressBarRef,
    scrollPathRef,
    bgRef,
    pageCount,
    setPageCount,
    selectedDot,
    setSelectedDot,
    sensedClick
  );

  useEffect(() => {
    let scroller = scrollerRef.current;
    let count = 0;
    if (scroller) {
      count = scroller.childNodes.length;
      // count = scroller.scrollWidth / scroller.getBoundingClientRect().width;
    }
    if (pageCount.count !== count) setPageCount((prev) => ({ ...prev, count }));
    // console.log(pageCount);
    return () => {};
  }, [scrollerRef]);

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
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Gamja+Flower&family=IM+Fell+English+SC&family=Indie+Flower&family=Luckiest+Guy&family=Khand:wght@300;400;500;600;700&family=Gloria+Hallelujah&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SlideMenu isOpen={isWalletMenuOpen} setIsOpen={setIsWalletMenuOpen} />
      <SideBar setIsWalletMenuOpen={setIsWalletMenuOpen} />
      <Dots
        pageCount={pageCount}
        setSelectedDot={setSelectedDot}
        setSensedClick={setSensedClick}
      />
      <ProgressBar refs={{ progressBarRef, scrollPathRef }} />
      {/* <BlobOverlay avgFps={currentFps} maxFps={maxFps} /> */}
      <Particles />
      <BGCurves ref={bgRef} />
      <PoweredBy />
      {/* <FpsView width={240} height={180} left={60} top={80} /> */}
      <Borders />
      <div className="main" ref={scrollerRef}>
        <section>
          <FirstPage />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <Intro />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <Details />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <RoadMap />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <FuturePossibilities />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <WhoIsBOOMHUNK />
        </section>
        <section>
          <img className="topLogo" src="/svg/TopLogo.svg" />
          <FAQ />
        </section>
      </div>
    </Container>
  );
}
