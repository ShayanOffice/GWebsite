import React from "react";
import styled from "styled-components";
const Container = styled.div`
  pointer-events: none;
  z-index: 10000;
  width: 100%;
  height: 99vh;
  margin: 0;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
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
    font-weight: bold;
    cursor: default;
    .BOOMHUNK {
      font-family: "Khand", sans-serif;
    }
    @media (max-width: 480px)  {
      font-size: 15px;
      font-weight: bold;
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
