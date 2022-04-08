import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .Part {
    width: 50%;
    .second {
      width: 25%;
    }
    img {
      position: absolute;
      width: 30%;
      top: 50%;
      left: 75%;

      transform: translate(-80%, -40%);
      &:nth-of-type(1) {
        transform: translate(-110%, -70%);
      }
      &:nth-of-type(3) {
        transform: translate(-32%, -35%);
      }
    }
  }
`;

export default function FirstPage() {
  return (
    <Container>
      <img className="Part" src="/svg/Logo.svg" />
      <div className="Part">
        <img className="first" src="/img/GooGholyEgg.png" />
        <img className="second" src="/img/BabyGooGholy.png" />
        <img className="third" src="/img/grownUpGooGholy.png" />
      </div>
    </Container>
  );
}
