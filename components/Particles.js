import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background: red; */
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  overflow-y: hidden;
  .white {
    height: 100vh;
    &:before {
      z-index: 1000;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60vh;
      background-image: linear-gradient(
        -180deg,
        #eeeeff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &:after {
      z-index: 1000;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 20vh;
      background-image: linear-gradient(
        0deg,
        #ebebeb 0%,
        rgba(235, 235, 235, 0) 70% rgba(235, 235, 235, 0) 100%
      );
    }
  }

  .squares {
    height: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }
  .square {
    animation: squares 9.5s linear infinite;
    align-self: flex-end;
    width: 1em;
    height: 1em;
    border-radius: 33%;
    transform: translateY(100%);
    background: #b3ff00;
    &:nth-child(2) {
      height: 4em;
      width: 10em;
      animation-delay: 1s;
      animation-duration: 17s;
      filter: blur(5px);
    }
    &:nth-child(3) {
      height: 6em;
      width: 4em;
      animation-delay: 1.5s;
      animation-duration: 8s;
      filter: blur();
    }
    &:nth-child(4) {
      height: 6em;
      width: 10em;
      animation-delay: 0.5s;
      filter: blur(3px);
      animation-duration: 13s;
    }
    &:nth-child(5) {
      height: 5em;
      width: 6em;
      animation-delay: 4s;
      filter: blur(2px);
      animation-duration: 11s;
    }
    &:nth-child(6) {
      height: 8em;
      width: 6em;
      animation-delay: 2s;
      filter: blur(1px);
      animation-duration: 9s;
    }
    &:nth-child(7) {
      height: 10em;
      width: 6em;
      filter: blur(2.5px);
      animation-duration: 12s;
    }
    &:nth-child(8) {
      height: 8em;
      width: 10em;
      animation-delay: 5s;
      filter: blur(6px);
      animation-duration: 18s;
    }
    &:nth-child(9) {
      height: 4em;
      width: 6em;
      filter: blur(0.5px);
      animation-duration: 9s;
    }
    &:nth-child(10) {
      height: 10em;
      width: 8em;
      animation-delay: 6s;
      filter: blur(0.5px);
      animation-duration: 12s;
    }
  }

  @keyframes squares {
    from {
      transform: translateY(100%) rotate(-60deg);
      background: #b3ff00;
    }
    to {
      transform: translateY(calc(-100vh + -100%)) rotate(165deg);
      background: #b3ff00;
    }
  }
`;

export default function Particles() {
  return (
    <Container>
      <div class="white">
        <div class="squares">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
      <div class="grey"></div>
    </Container>
  );
}
