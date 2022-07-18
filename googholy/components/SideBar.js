import React, { useRef } from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LottieAnim from "./LottieAnim";

const Container = styled.div`
  .icons {
    position: fixed;
    height: 100vh;
    z-index: 100001;
    top: 0;
    left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-aspect-ratio: 32/40) {
      height: 96.8vh;
    }
  }
  .bg {
    pointer-events: none;
    position: fixed;
    z-index: 100000;
    background-color: rgba(255, 255, 255, 0.3);
    height: 100vh;
    width: 68px;
    left: 0;
    top: 0;
    transition: all 0.7s;
    backdrop-filter: blur(15px);
  }

  .wallet {
    margin-top: 35px;
    height: 25px;
    cursor: pointer;
    width: 1.1vw;
    min-width: 25px;
    &:last-of-type {
      margin-bottom: 55px;
    }
  }
  img {
    margin-top: 35px;
    cursor: pointer;
    width: 1.1vw;
    min-width: 25px;
    &:last-of-type {
      margin-bottom: 55px;
    }
  }

  @media (max-width: 640px) {
    .icons {
      left: 23px;
    }
    .bg {
      width: 55px;
    }
    .wallet {
      height: 19px;
    }
    img {
      min-width: 19px;
    }
  }
  @media (max-width: 500px) {
    .icons {
      left: 14px;
    }
    .bg {
      width: 40px;
    }
    .wallet {
      height: 17px;
    }
    img {
      /* width: 1.1vw; */
      min-width: 17px;
    }
  }
`;

export default function SideBar({ setIsWalletMenuOpen }) {
  // const blocklyRef = useRef(null);
  return (
    <Container>
      <div className="bg" />
      <div className="icons">
        <div>
          {/* <img
            className="wallet"
            src="/svg/wallet.svg"
            alt="wallet icon"
            onClick={() => setIsWalletMenuOpen(true)}
          /> */}
          <LottieAnim
            className="wallet"
            src="/lottie/12202-wallet.json"
            sizeX="620%"
            sizeY="620%"
            // renderer="canvas"
            speed={2}
            autoplay={true}
            // loop={true}
            hoverSegment={[19, 25]}
            // clickSegment={[19, 25]}
            onEnteredFrames={{
              25: (e, animated, element) => {
                if (e.direction == 1) {
                  console.log("entered frame 25", e.direction);
                }
              },
            }}
            // setLottieAnimation={setLottie} give it the setState to get the animation instance and take control on the outside.
            // elRef={animElementRef} get html ref of animation container
            onClick={() => setIsWalletMenuOpen(true)}
          />
          {/* <LoginButton/> */}
        </div>
        <div>
          <img src="/svg/instagram.svg" alt="instagram icon" />
          <img src="/svg/discord.svg" alt="discord icon" />
          <img src="/svg/twitter.svg" alt="twitter icon" />
        </div>
      </div>
    </Container>
  );
}
