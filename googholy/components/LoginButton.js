import { useState } from "react";
import styled from "styled-components";
import LottieAnim from "./LottieAnim";

const Container = styled.div``;

export default function LoginButton({
  className,
  loginFunction,
  logoutFunction,
  isAuthenticated,
  isAuthenticating,
}) {
  const [hovering, setHovering] = useState(false);
  const blackBgStyles =
    "absolute z-0 w-[135%] h-[110%] rounded-full  transition-all shadow-md";
  return (
    <Container
      className={className + " relative"}
      onClick={!isAuthenticated ? loginFunction : logoutFunction}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {isAuthenticating && !isAuthenticated && (
        <LottieAnim
          title="Connecting..."
          className="absolute -top-6"
          src="/lottie/LoginPendingAmber.json"
          sizeX="600%"
          // sizeY="250%"
          renderer="canvas"
          speed={1}
          autoplay={true}
          loop={true}
          // hoverSegment={[0, 35]}

          alt="Signing in icon"
        />
      )}
      {isAuthenticated && !isAuthenticating && (
        <div className="relative flex items-center justify-center w-full h-full">
          <LottieAnim
            title="Disconnect Wallet"
            className="absolute z-10"
            src="/lottie/FingerPrint.json"
            sizeX="300%"
            // sizeY="250%"
            renderer="canvas"
            speed={1}
            segment={[0, 43]}
            autoplay={true}
            // onInit={(animated) => console.log("authed anim init!!!!!!", animated)}
            alt="login icon"
          />
          <div
            className={`${blackBgStyles} ring-2 ring-lime-400  bg-gray-800`}
          />
        </div>
      )}
      {!isAuthenticated && !isAuthenticating && (
        <div className="relative flex items-center justify-center w-full h-full">
          <LottieAnim
            title="Connect Wallet"
            className="absolute z-10"
            src="/lottie/FingerPrint.json"
            sizeX="300%"
            // sizeY="250%"
            renderer="canvas"
            speed={1.5}
            autoplay={false}
            hoverSegment={[0, 35]}
            // clickSegment={[36, 80]}
            alt="login icon"
          />
          <div className={`${blackBgStyles} ${hovering && "bg-gray-800"}`} />
        </div>
      )}
      <div className="w-full h-9" />
    </Container>
  );
}
