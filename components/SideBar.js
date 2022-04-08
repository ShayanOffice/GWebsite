import React from "react";
import styled from "styled-components";
const Container = styled.div`
  .icons {
    /* margin-top: 50px; */
    position: fixed;
    height: 97vh;
    @media (max-width: 768px) {
      height: 96vh;
    }
    z-index: 200;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  bg {
    position: absolute;
    background-color: white;
    height: 100vh;
    width: 20vw;
    z-index: 190;
    left: 0;
  }

  img {
    margin-top: 22px;
    margin-left: 20px;
    cursor: pointer;
    width: 3vh;
    min-width: 26px;
    /* &:first-of-type {
      position: fixed;
    } */
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;

export default function SideBar() {
  return (
    <Container>
      <div className="bg" />
      <div className="icons">
        <img src="/svg/wallet.svg" alt="wallet icon" />
        <div>
          <img src="/svg/discord.svg" alt="discord icon" />
          <img src="/svg/twitter.svg" alt="twitter icon" />
          <img src="/svg/instagram.svg" alt="instagram icon" />
        </div>
      </div>
    </Container>
  );
}
