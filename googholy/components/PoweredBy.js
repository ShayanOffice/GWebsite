import React from "react";
import styled from "styled-components";
const Container = styled.div`
  pointer-events: none;
  z-index: 10000;
  width: 100%;
  height: 98.5vh;
  margin: 0;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  @media (max-aspect-ratio: 32/40) {
    height: 97.5vh;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    text-align: center;
    font-family: "Amatic SC", cursive;
    margin: 0;
    font-size: 22px;
    color: #323;
    font-weight: bolder;
    cursor: default;
    text-shadow: 0px 1px 5px #fff;
    .BOOMHUNK {
      font-family: "Khand", sans-serif;
      font-weight: 600;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
    span {
      &::selection {
        background: none;
        color: #323;
        text-shadow: none;
      }
    }
  }
`;
export default function PoweredBy() {
  return (
    <Container>
      <div>
        <span className="power">powered by</span>
        <span className="BOOMHUNK">&nbsp;BOOMHUNK</span>
      </div>
    </Container>
  );
}
