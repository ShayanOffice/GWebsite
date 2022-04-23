import React from "react";
import styled from "styled-components";
import TimedSlideShow from "../components/TimedSlideShow";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  margin-top: -10px;
  margin-bottom: 65px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  font-family: "Amatic SC", cursive;
  .slidesContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    @media (max-aspect-ratio: 36/40) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .textContent {
    margin-bottom: 2%;
    font-size: 2rem;
    line-height: 2.1rem;
    /* * {
      text-justify: distribute;
    } */
    /* line-height: auto; */
    text-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff,
      0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
  }

  @media (max-width: 1800px) {
    .textContent {
      font-size: 1.7rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 980px) {
    .textContent {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 780px) {
    .textContent {
      font-size: 1.3rem;
      line-height: 1.4rem;
    }
  }
  @media (max-width: 500px) {
    .textContent {
      font-size: 1.1rem;
      line-height: 1.2rem;
    }
  }
  @media (max-width: 390px) {
    .textContent {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }

  /* ///////////////////////// */
  @media (max-height: 900px) {
    .textContent {
      margin-bottom: 1%;
    }
  }
  @media (max-height: 670px) {
    .textContent {
      margin-bottom: 0%;
      /* font-size: 1.3rem;
      line-height: 1.3rem; */
    }
  }
`;

const gSlides = [
  "/img/g-slideshow/0.jpg",
  "/img/g-slideshow/1.jpg",
  "/img/g-slideshow/2.jpg",
  "/img/g-slideshow/3.jpg",
  "/img/g-slideshow/4.jpg",
  "/img/g-slideshow/5.jpg",
  "/img/g-slideshow/6.jpg",
  "/img/g-slideshow/7.jpg",
  "/img/g-slideshow/8.jpg",
  "/img/g-slideshow/9.jpg",
  "/img/g-slideshow/10.jpg",
  "/img/g-slideshow/11.jpg",
  "/img/g-slideshow/12.jpg",
  "/img/g-slideshow/13.jpg",
  "/img/g-slideshow/14.jpg",
  "/img/g-slideshow/15.jpg",
  "/img/g-slideshow/16.jpg",
  "/img/g-slideshow/17.jpg",
  "/img/g-slideshow/18.jpg",
  "/img/g-slideshow/19.jpg",
];
export default function Intro() {
  return (
    <Container>
      <div className="slidesContainer">
        <TimedSlideShow imgs={gSlides} />
        <TimedSlideShow imgs={gSlides} />
        <TimedSlideShow imgs={gSlides} />
      </div>
      <div className="textContent">
        <p className="font-bold">
          WHY BUY GOOGHOLIES ?
          <br /> THE GOOGHOLIES CLUB IS A COLLECTION OF 4,444 FUNNY BEAUTIFUL
          UNIQUE NFTS. DIGITAL COLLECTIBLES LIVING ON THE POLYGON BLOCKCHAIN.
          YOUR “GOOGHOLY” IS YOUR MEMBERSHIP CARD INTO THE GOOGHOLIES CLUB,
          GRANTS ACCESS TO MEMBER-ONLY BENEFITS AND MANY MORE.
        </p>
      </div>
    </Container>
  );
}
