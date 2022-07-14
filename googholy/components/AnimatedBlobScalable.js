import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import blob_animation from "../../animations/animated_blob.json";

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
  const options = {
    loop: true,
    autoplay: true,
    // initialSegment: [30, 150],
    animationData: blob_animation,
    // rendererSettings: {
    //   preserveAspectRatio: "none",
    // },
  };
  const { View } = useLottie(options, {
    pointerEvents: "none",
    width: "10%",
  });
  return View;
};

const AnimatedBlobScalable = React.forwardRef((props, ref) => {

  return (
    <Container ref={ref}>
      <Anim />
    </Container>
  );
});
export default AnimatedBlobScalable;
