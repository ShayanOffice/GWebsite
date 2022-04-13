import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  .leftPart {
    width: 110%;
    z-index: 10000000;
  }
  .Logo {
    width: 100%;
    height: 70%;
  }
  .Images {
    width: 100%;
    .second {
      width: 30%;
    }
    img {
      position: absolute;
      width: 37%;
      top: 45%;
      left: 75%;

      transform: translate(-80%, -55%);
      &:nth-of-type(1) {
        transform: translate(-110%, -83%);
      }
      &:nth-of-type(3) {
        transform: translate(-32%, -45%);
      }
    }
  }

  .Minting {
    margin-left: 15px;
    width: 100%;
    height: 50%;
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 4.5rem;
    .unit {
      font-size: 2.6rem;
      font-weight: bold;
    }
    /* font-family: "Luckiest Guy", cursive; */
    /* font-family: "Gloria Hallelujah", cursive; */
    font-family: "Amatic SC", cursive;
    /* font-family: 'Indie Flower', cursive; */
    /* font-family: 'IM Fell English SC', serif; */
    /* font-family: 'Gamja Flower', cursive; */
  }
  @media (max-width: 1800px) {
    .Minting {
      font-size: 3.5rem;
      line-height: 3.2rem;
      .unit {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 640px) {
    .Minting {
      font-size: 2.5rem;
      line-height: 2.2rem;
      .unit {
        font-size: 1rem;
      }
    }
  }

  @media (max-height: 400px) {
    @media (max-width: 1400px) {
      .Minting {
        font-size: 2.7rem;
        line-height: 2.5rem;
        .unit {
          font-size: 1.5rem;
        }
      }
    }
    @media (max-width: 1180px) {
      .Minting {
        font-size: 2.3rem;
        line-height: 2.1rem;
        .unit {
          font-size: 1.1rem;
        }
      }
    }
    @media (max-width: 1080px) {
      .Minting {
        font-size: 1.8rem;
        line-height: 1.7rem;
        .unit {
          font-size: 1rem;
        }
      }
    }
    @media (max-width: 640px) {
      .Minting {
        font-size: 1.5rem;
        line-height: 1.3rem;
        .unit {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-aspect-ratio: 7/10) {
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    .Logo {
      width: 100%;
      height: 100%;
    }
    .Images {
      width: 100%;
      height: 100%;
      position: relative;
      .second {
        width: 50%;
      }
      img {
        width: 60%;
        top: 50%;
        left: 46%;

        &:nth-of-type(1) {
          transform: translate(-95%, -100%);
        }
        &:nth-of-type(2) {
          transform: translate(-55%, -75%);
        }
        &:nth-of-type(3) {
          transform: translate(-5%, -55%);
        }
      }
    }
    .Minting {
      margin-top: -10%;
      margin-left: 0;
      .unit {
      }
    }
  }
`;

export default function FirstPage() {
  return (
    <Container>
      <div className="side leftPart flex flex-col w-full h-full text-center justify-center align-middle">
        <img className="Logo" src="/svg/Logo.svg" />
        <div className="Minting">
          Minting in
          <br /> 98<span className="unit">days</span>&nbsp; 16
          <span className="unit">hours</span>&nbsp; 54
          <span className="unit">minutes</span>&nbsp; 33
          <span className="unit">seconds</span>&nbsp;
        </div>
      </div>
      <div className="side rightPart flex flex-col w-full h-full text-center justify-center align-middle">
        <div className="Images">
          <img className="first" src="/img/GooGholyEgg.png" />
          <img className="second" src="/img/BabyGooGholy.png" />
          <img className="third" src="/img/grownUpGooGholy.png" />
        </div>
      </div>
    </Container>
  );
}
