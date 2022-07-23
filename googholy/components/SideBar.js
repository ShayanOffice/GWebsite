import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import LottieAnim from "./LottieAnim";

import { useMoralis } from "react-moralis";

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
    margin-top: 10px;
    /* height: 30px; */
    cursor: pointer;
    width: 1.1vw;
    min-width: 25px;
  }
  .login {
    margin-top: 40px;
    /* height: 30px; */
    cursor: pointer;
    width: 1.1vw;
    height: fit-content;
    min-width: 25px;
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

  .icon {
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
      /* height: 22px; */
      min-width: 19px;
    }
    .login {
      min-width: 19px;
      max-height: 25px;
    }
    .icon {
      min-width: 19px;
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
      /* height: 20px; */
      min-width: 17px;
    }
    .login {
      min-width: 17px;
      max-height: 23px;
    }
    .icon {
      /* width: 1.1vw; */
      min-width: 17px;
    }
    img {
      /* width: 1.1vw; */
      min-width: 17px;
    }
  }
`;

export default function SideBar({ setIsWalletMenuOpen }) {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    console.log("url", process.env.NEXT_PUBLIC_SERVER_URL);
    console.log("appId", process.env.NEXT_PUBLIC_MORALIS_APP_ID);

    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log into GooGholy NFT Project" })
        .then(function (user) {
          console.log("logged in user: ", user);
          console.log("Connected Wallet: ", user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  // const blocklyRef = useRef(null);
  return (
    <Container>
      <div className="bg" />
      <div className="icons">
        <div className="flex flex-col items-center justify-center">
          <LoginButton
            className="z-10 mt-6 transition-all rounded-full login hover:scale-125 "
            loginFunction={login}
            logoutFunction={logOut}
            isAuthenticated={isAuthenticated}
            isAuthenticating={isAuthenticating}
          />

          <LottieAnim
            className="z-20 transition-all wallet hover:scale-125"
            src="/lottie/wallet_anim.json"
            sizeX="450%"
            renderer="canvas"
            speed={2}
            hoverSegment={[0, 25]}
            onClick={() =>
              isAuthenticated ? setIsWalletMenuOpen(true) : login()
            }
            // sizeY="78%"
            // innerStyle={{ marginBottom: "20px" }}
            // autoplay={true}
            // loop={true}
            // clickSegment={[19, 25]}
            // onEnteredFrames={{
            //   25: (e, animated, element) => {
            //     if (e.direction == 1) {
            //       console.log("entered frame 25", e.direction);
            //     }
            //   },
            // }}
            // setLottieAnimation={setLottie} give it the setState to get the animation instance and take control on the outside.
            // elRef={animElementRef} get html ref of animation container
          />

          {/* <img
            className="transition-all duration-75 hover:scale-125 login"
            src="/svg/Login.svg"
            alt="login icon"
            onClick={login}
          /> */}
        </div>
        <div>
          {/* <img
            className="transition-all duration-75 hover:scale-125"
            src="/svg/instagram.svg"
            alt="instagram icon"
          /> */}
          <LottieAnim
            // title="Instagram Page"
            className="transition-all duration-75 icon hover:scale-125"
            src="/lottie/6716-twitter-social-media-icon.json"
            sizeX="300%"
            // sizeY="250%"
            renderer="canvas"
            speed={1.5}
            autoplay={false}
            hoverSegment={[0, 30]}
            // clickSegment={[36, 80]}
            alt="Instagram icon"
          />
          <LottieAnim
            // title="Instagram Page"
            className="transition-all duration-75 icon hover:scale-125"
            src="/lottie/6749-instagram-social-media-icon.json"
            sizeX="300%"
            // sizeY="250%"
            renderer="canvas"
            speed={1.5}
            autoplay={false}
            hoverSegment={[0, 10]}
            // clickSegment={[36, 80]}
            alt="Instagram icon"
          />

          {/* <img
            className="transition-all duration-75 hover:scale-125"
            src="/svg/discord.svg"
            alt="discord icon"
          /> */}
          {/* <img
            className="transition-all duration-75 hover:scale-125"
            src="/svg/twitter.svg"
            alt="twitter icon"
          /> */}
        </div>
      </div>
    </Container>
  );
}
