import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  text-align: center;
  .Logo {
    width: 50%;
  }
  .Images {
    width: 50%;
    .second {
      width: 30%;
    }
    img {
      /* visibility: hidden; */
      position: absolute;
      width: 37%;
      top: 50%;
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
  /* @media (max-width: ${(props) => props.view.height}px) { */
  @media (orientation: portrait) {
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
        left: 50%;

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
  }
  .MintingSpace {
    width: 100%;
    left: -30%;
    visibility: hidden;
    @media (orientation: portrait) {
      display: none;
    }
  }
  .Minting {
    width: 100%;
    height: 100%;
    font-size: 3.5rem;
    font-weight: bold;
    position: absolute;
    line-height: 2.7rem;
    top: 70%;
    left: -23%;
    /* background-color: white;
    filter: blur(15px); */
    .unit {
      font-size: 2rem;
      font-weight: bold;
    }
    @media (orientation: portrait) {
      top: 40%;
      left: auto;
      font-size: 3rem;

      .unit {
        font-size: 1.7rem;
      }
    }
    /* font-family: "Luckiest Guy", cursive; */
    /* font-family: "Gloria Hallelujah", cursive; */
    font-family: "Amatic SC", cursive;
    /* font-family: 'Indie Flower', cursive; */
    /* font-family: 'IM Fell English SC', serif; */
    /* font-family: 'Gamja Flower', cursive; */
  }
`;

export default function FirstPage() {
  return (
    <Container>
      <img className="Logo" src="/svg/Logo.svg" />
      <div className="Minting">
        Minting in
        <br /> 98<span className="unit">days</span>&nbsp; 16
        <span className="unit">hours</span>&nbsp; 54
        <span className="unit">minutes</span>&nbsp; 33
        <span className="unit">seconds</span>&nbsp;
      </div>
      <div className="MintingSpace">
        Minting in
        <br /> 98<span className="unit">days</span>&nbsp; 16
        <span className="unit">hours</span>&nbsp; 54
        <span className="unit">minutes</span>&nbsp; 33
        <span className="unit">seconds</span>&nbsp;
      </div>
      <div className="Images">
        <img className="first" src="/img/GooGholyEgg.png" />
        <img className="second" src="/img/BabyGooGholy.png" />
        <img className="third" src="/img/grownUpGooGholy.png" />
      </div>
    </Container>
  );
}
