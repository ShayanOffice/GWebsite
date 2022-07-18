import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import LottieAnim from "./LottieAnim";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  /* bottom: -5vh; */

  z-index: 1;
  display: flex;
  align-items: flex-end;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  overflow-y: hidden;

  /* filter: brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7)
    saturate(0.88); */
`;

const Anim = () => {
  return (
    <LottieAnim
      src="/lottie/animated_melts.json"
      style={{
        zIndex: 6,
        pointerEvents: "none",
        height: "65%",
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

const BGCurves = React.forwardRef((props, ref) => {
  const { height, width } = useWindowDimensions();
  const moreCurves = (count) => {
    if (width > 768) {
      let animCurves = [];
      for (let index = 0; index < count; index++) {
        animCurves.push(<Anim />);
      }
      // console.log(animCurves);
      return animCurves.map((item, i) => <Anim key={i} />);
    }
    return;
  };

  return (
    <Container ref={ref}>
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      {/* {moreCurves(3)} */}
    </Container>
  );
});
export default BGCurves;
