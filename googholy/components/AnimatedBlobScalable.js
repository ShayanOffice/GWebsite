import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LottieAnim from "./LottieAnim";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  bottom: 0vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* filter: brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7)
    saturate(0.88); */
  * {
    z-index: 51;
  }
`;

const Anim = () => {
  return (
    <LottieAnim
      src="/lottie/animated_blob.json"
      style={{
        pointerEvents: "none",
        width: "10%",
      }}
      speed={1}
      autoplay={true}
      loop={true}
      onClick={() => setIsWalletMenuOpen(true)}
    />
  );
};

const AnimatedBlobScalable = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Anim />
    </Container>
  );
});
export default AnimatedBlobScalable;
