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
    z-index: 100010;
    /* filter: brightness(70%) blur(10px) hue-rotate(-3deg) contrast(7)
    saturate(0.88);
    display: none; */
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
    z-index: 100011;
    /* filter: brightness(70%) blur(10px) hue-rotate(-3deg) contrast(7)
    saturate(0.88); */
    @media (max-width: 768px) {
      display: none;
    }
  }

  @keyframes animate {
    0%,
    100% {
      filter: hue-rotate(50deg);
      /* filter: blur(5px) hue-rotate(50deg) contrast(7) */
    /* saturate(0.88); */
    }
    50% {
      filter: hue-rotate(250deg);
      /* filter:  blur(5px) hue-rotate(250deg) contrast(7)
    saturate(0.88); */
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
