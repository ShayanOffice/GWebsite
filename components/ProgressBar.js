import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .scrollPath {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2%;
    min-height: 15px;
    max-height: 50px;
    background-color: rgba(170, 170, 190, 1);
    z-index: 10;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .progressBar {
    border-radius: 3px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2%;
    min-height: 15px;
    max-height: 50px;
    background: linear-gradient(to right, #008aff, #00ffe7);
    pointer-events: none;
    transition: width 0.7s;
    animation: animate 5s ease-in-out infinite;
    z-index: 11;
    @media (max-width: 768px) {
      display: none;
    }
  }

  @keyframes animate {
    0%,
    100% {
      filter: hue-rotate(50deg);
    }
    50% {
      filter: hue-rotate(250deg);
    }
  }
`;

export default function ProgressBar({ refs }) {
  return (
    <Container>
      <div className="progressBar" ref={refs.progressBarRef} />
      <div className="scrollPath" ref={refs.scrollPathRef} />
    </Container>
  );
}
