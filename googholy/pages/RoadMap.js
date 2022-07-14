import React from "react";
import styled from "styled-components";

import AnimatedBlob from "../../googholy/components/AnimatedBlob";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  margin-top: -60px;
  /* margin-bottom: 65px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 1.9rem;
  font-weight: bold;
  position: relative;
  font-family: "Amatic SC", cursive;
  div {
    margin: 5px 10px;
  }
  span {
    margin-top: 10px;
  }
  .point {
    width: 1.5rem;
    margin-right: 1rem;
    filter: hue-rotate(-125deg) brightness(1.32)
      drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.8));
    @media (max-width: 380px) {
      width: 10px;
    }
  }
  .mainTitle {
    margin-top: 30px;
    margin-bottom: -30px;
    font-weight: bold;
    font-size: 5rem;
  }
  @media (max-aspect-ratio: 32/40) {
    height: 95vh;
  }

  @media (max-width: 1800px) {
    .content {
      font-size: 1.8rem;
      .mainTitle {
        font-size: 4rem;
      }
    }
  }
  @media (max-width: 980px) {
    /* padding: 4rem 6rem; */
    .content {
      font-size: 1.6rem;
      .mainTitle {
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 780px) {
    .content {
      font-size: 1.4rem;
      .mainTitle {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 640px) {
    .content {
      font-size: 1.1rem;
      .mainTitle {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem;
    .content {
      font-size: 0.9rem;
      .mainTitle {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 390px) {
    .content {
      font-size: 0.8rem;
      .mainTitle {
        font-size: 1.2rem;
      }
    }
  }

  /* @media (max-height: 400px) {
    @media (max-width: 1400px) {
      .content {
        font-size: 2.7rem;
      }
    }
    @media (max-width: 1180px) {
      .content {
        font-size: 2.3rem;
      }
    }
    @media (max-width: 1080px) {
      .content {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 640px) {
      .content {
        font-size: 1.5rem;
      }
    }
  } */

  /* @media (max-aspect-ratio: 32/40) {
    .content {
    }
    @media (max-width: 980px) {
      .content {
        font-size: 3.5rem;
      }
    }
    @media (max-width: 660px) {
      .content {
        font-size: 2.5rem;
      }
    }
    @media (max-width: 420px) {
      .content {
        font-size: 2.2rem;
      }
    }
    @media (max-width: 320px) {
      .content {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 282px) {
      .content {
        font-size: 1.5rem;
      }
    }
  } */
`;

export default function RoadMap() {
  return (
    <Container>
      <div className="content w-full h-full  flex flex-col justify-center text-center items-center">
        <span className="mainTitle">RoadMap</span>
        {/* <div className="bg w-full h-full bg-white flex justify-center" /> */}
        <div className="w-full h-full flex justify-center text-center items-center">
          <div className="w-full h-full flex flex-col justify-center line-through text-center items-center">
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              making First three evolution stages of art
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Making rarity work.
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point" />
              Website 1.0 design and deployment.
            </span>
          </div>
          <div className="w-full h-full flex flex-col justify-center text-center items-center">
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              NFT content and Evolution.
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              functionality Social channels & Discord server creation.
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Main teaser music and video creation.
            </span>
          </div>
        </div>

        <div className="w-full h-full flex justify-center text-center items-center">
          <div className="w-full h-full flex flex-col justify-center text-center items-center">
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Eggs whitelisting
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Eggs mint date
            </span>
          </div>
          <div className="w-full h-full flex flex-col justify-center text-center items-center">
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Baby GooGholies whitelisting{" "}
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              Baby GooGholies Mint date
            </span>
          </div>
          <div className="w-full h-full flex  flex-col justify-center text-center items-center">
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              GooGholies whitelisting
            </span>
            <span className="flex justify-center items-center">
              <img src="/img/point.png" className="point " />
              GooGholies Mint date
            </span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center text-center items-center">
          <span className="flex justify-center items-center">
            <img src="/img/point.png" className="point " />
            Final Evolution Stage Design and Mint
          </span>
        </div>
      </div>
    </Container>
  );
}
