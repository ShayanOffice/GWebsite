import React from "react";
import styled from "styled-components";

import AnimatedBlob from "../../googholy/components/AnimatedBlob";
import AnimatedBlobScalable from "../components/AnimatedBlobScalable";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
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
    position: relative;
    span {
      margin-top: 10px;
      position: relative;
    }
  }
  .point {
    width: 1.5rem;
    margin-right: 1rem;
    filter: hue-rotate(-125deg) brightness(1.32) drop-shadow(0px 3px 3px rgba(0,0,0,.8));
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

export default function FuturePossibilities() {
  return (
    <Container>
      <div className="content w-full h-full  flex flex-col justify-center text-center items-center">
        <span className="mainTitle">Possible Future</span>
        <div className="content w-full h-full  flex justify-center text-center items-center">
          <div className="content w-full h-full flex flex-col justify-center text-center items-start">
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              RoadMap 2.0
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              DAO
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              Staking
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              BOOMHUNK Metaverse Music Festivals
            </span>
          </div>
          <div className="content w-full h-full flex flex-col justify-center text-center items-start">
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              Rarity Checker
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              Design and add Next Generation GooGholies
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              GameFi whitepapers
            </span>
            <span className="flex justify-center items-center">
              <img
                src="/img/point.png"
                className="point"
              />
              Rest of My NFT project Ideas
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
