import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import useHorizontalScroller from "../../../hooks/useHorizontalScroller";
import Particles from "../../../components/Particles";
import BGCurves from "../../../components/BGCurves";
import BlobOverlay from "../../../components/BlobOverlay";
import Dots from "../../../components/Dots";
import ProgressBar from "../../../components/ProgressBar";
import SideBar from "../../../components/SideBar";
import useHandleFullscreen from "../../../hooks/useHandleFullscreen";

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  @media (max-width: 768px) {
    height: 85vh;
  }
  .main {
    touch-action: pan-y;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
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
      height: 95vh;
      @media (max-width: 768px) {
        height: 87vh;
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
      font-family: "Luckiest Guy", cursive;
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

export default function Home() {
  const scrollerRef = useRef();
  const progressBarRef = useRef();
  const scrollPathRef = useRef();
  const bgRef = useRef();
  const [pageCount, setPageCount] = useState({ count: 1, active: 0 });
  const [selectedDot, setSelectedDot] = useState(0);
  const [sensedClick, setSensedClick] = useState(0);
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
      // count = scroller.scrollWidth / scroller.getBoundingClientRect().width - 1;
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Gamja+Flower&family=IM+Fell+English+SC&family=Indie+Flower&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SideBar />
      <Dots
        pageCount={pageCount}
        setSelectedDot={setSelectedDot}
        setSensedClick={setSensedClick}
      />
      <ProgressBar refs={{ progressBarRef, scrollPathRef }} />
      <BlobOverlay />
      <Particles />
      <BGCurves ref={bgRef} />

      <div className="main" ref={scrollerRef}>
        <section>
          <h1>Page One</h1>
        </section>
        <section>
          <h1>Page Two</h1>
        </section>
        <section>
          <h1>Page Three</h1>
        </section>
        <section>
          <h1>Page Four</h1>
        </section>
        <section>
          <h1>Page Five</h1>
        </section>
      </div>
    </Container>
  );
}
