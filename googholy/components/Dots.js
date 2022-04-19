import React, { useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 99vh;
  text-align: center;
  bottom: 0;
  margin: 0;
  padding: 0;
  @media (max-aspect-ratio: 32/40) {
    height: 95vh;
  }

  /* position: absolute; */
  z-index: 200;
  top: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
  span {
    pointer-events: visiblePainted;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-family: "Amatic SC", cursive;
    font-size: 110px;
    height: 50px;
    overflow: hidden;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-weight: bold; */
    color: #323;

    /* transition: all .3s; */
    h1 {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 50px;
      text-shadow: 0px 1px 4px #fff;
      &::selection {
        background: none;
        color: #323;
        text-shadow: none;
      }
    }
  }
`;

export default function Dots({ pageCount, setSelectedDot, setSensedClick }) {
  const dots = () => {
    let pages = [];
    for (let i = 0; i < pageCount.count; i++)
      pages.push({ active: i === pageCount.active });
    return pages.map((item, index) =>
      item.active ? (
        <span
          key={index}
          style={{ fontWeight: "bold" }}
          onClick={() => {
            setSelectedDot(index);
            setSensedClick(Math.random());
          }}
        >
          <h1 style={{ textShadow: "0px 3px 2px #fff" }}>.</h1>
        </span>
      ) : (
        <span
          key={index}
          onClick={() => {
            setSelectedDot(index);
            setSensedClick(Math.random());
          }}
        >
          <h1>.</h1>
        </span>
      )
    );
  };

  return (
    <Container>
      {dots()}
    </Container>
  );
}
