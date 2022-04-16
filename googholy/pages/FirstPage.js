import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react/cjs/react.development";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  .mintNow {
    text-shadow: 0px 1px 4px #000;
    .mintBtnText {
      text-shadow: 0px 1px 4px #000;
    }
  }
  .bg {
    border-radius: 15%;
    z-index: -50;
    filter: blur(40px);
    width: 80%;
    height: 50%;
    min-height: 10rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
  }

  .leftPart {
    width: 100%;
    z-index: 1;
  }
  .Logo {
    width: 100%;
    height: 70%;
  }
  .Images {
    width: 100%;
    .second {
      width: 35%;
    }
    img {
      position: absolute;
      width: 42%;
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
    margin-left: 25px;
    width: 100%;
    height: 50%;
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    & > * {
      margin-bottom: 15%;
    }
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
  @media (max-width: 980px) {
    .Minting {
      font-size: 3rem;
      line-height: 2.8rem;
      .unit {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 780px) {
    .bg {
      top: 65%;
    }
    .Minting {
      font-size: 1.7rem;
      line-height: 1.6rem;
      .unit {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 500px) {
    .Minting {
      font-size: 1.5rem;
      line-height: 1.4rem;
      .unit {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 390px) {
    .Minting {
      font-size: 1.5rem;
      line-height: 1.4rem;
      .unit {
        font-size: 0.9rem;
      }
      .mintBtnTxt {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-height: 400px) {
    .mintBtnTxt {
      font-size: 4rem;
    }
    @media (max-width: 1400px) {
      .Minting {
        font-size: 2.7rem;
        line-height: 2.5rem;
        .unit {
          font-size: 1.5rem;
        }
        .mintBtnTxt {
          font-size: 4rem;
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
        .mintBtnTxt {
          font-size: 3rem;
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

  @media (max-aspect-ratio: 32/40) {
    .Minting {
      margin-bottom: 30%;
    }
    padding: 0.5rem 2.9rem;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    .Logo {
      width: 95%;
      height: 100%;
    }
    .Images {
      width: 100%;
      height: 100%;
      position: relative;
      .second {
        width: 60%;
      }
      img {
        width: 70%;
        top: 35%;
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
    @media (max-width: 980px) {
      .Minting {
        font-size: 3.5rem;
        line-height: 3.2rem;
        .unit {
          font-size: 2rem;
        }
      }
    }
    @media (max-width: 660px) {
      .Minting {
        font-size: 2.5rem;
        line-height: 2.4rem;
        .unit {
          font-size: 1.5rem;
        }
      }
    }
    @media (max-width: 420px) {
      .Minting {
        font-size: 2.2rem;
        line-height: 2.2rem;
        .unit {
          font-size: 0.8rem;
        }
      }
    }
    @media (max-width: 320px) {
      .Minting {
        font-size: 1.8rem;
        line-height: 1.8rem;
        .unit {
          font-size: 0.8rem;
        }
      }
    }
    @media (max-width: 282px) {
      .Minting {
        font-size: 1.5rem;
        line-height: 1.8rem;
        .unit {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default function FirstPage() {
  return (
    <Container>
      <div className="side leftPart flex flex-col w-full h-full text-center justify-center align-middle">
        <img className="Logo" src="/svg/Logo.svg" />
        <div className="Minting relative">
          <span>
            <div className="bg h-full bg-white absolute">
              Minting in
              <br /> 98<span className="unit">days</span>&nbsp; 16
              <span className="unit">hours</span>&nbsp; 54
              <span className="unit">minutes</span>&nbsp; 33
              <span className="unit">seconds</span>&nbsp;
            </div>
            Minting in
            <br /> 98<span className="unit">days</span>&nbsp; 16
            <span className="unit">hours</span>&nbsp; 54
            <span className="unit">minutes</span>&nbsp; 33
            <span className="unit">seconds</span>&nbsp;
          </span>
          {/* <div className="mintNow flex justify-center align-middle">
            <button className="font-bold text-white bg-lime-400 ring-lime-300 ring-4  rounded-3xl p-1 px-4  shadow-xl text-6xl sm:text-6xl md:text-7xl  lg:text-8xl xl:text-9xl flex flex-none justify-center text-center align-middle mx-12">
              <span className="mintBtnTxt drop-shadow-md">MiNt NoW!</span>
            </button>
          </div> */}
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
