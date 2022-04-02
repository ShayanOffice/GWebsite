import React, { useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  bottom: 0;
  margin: 0;
  padding: 0;

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
    height: 50;
    overflow: hidden;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-weight: bold; */
    color: #323;
    transition: all 1s;
    h1 {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 50px;
    }
  }
`;

export default function Dots({ pageCount, changeActivePage }) {
  const dots = () => {
    let pages = [];
    for (let i = 0; i < pageCount.count; i++)
      pages.push({ active: i === pageCount.active });
    // console.log(pages);
    return pages.map((item, index) =>
      item.active ? (
        <span key={index} style={{ fontWeight: "bold" }}>
          <h1>.</h1>
        </span>
      ) : (
        <span
          key={index}
          onClick={() => {
            changeActivePage(index);
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
      {/* .....sargasrfgersgt */}
    </Container>
  );
}