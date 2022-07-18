import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
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
        zIndex: 6,
        pointerEvents: "none",
        // width: "70vw",
        width: "65%",
        minWidth: "480px",
        // heigth: "100%",
        flex: "none",

        // scrollSnapAlign: 'Start',
      }}
      speed={1}
      autoplay={true}
      loop={true}
      onClick={() => setIsWalletMenuOpen(true)}
    />
  );
};

const AnimatedBlob = React.forwardRef((props, ref) => {
  const { height, width } = useWindowDimensions();

  return (
    <Container ref={ref}>
      <Anim />
    </Container>
  );
});
export default AnimatedBlob;
