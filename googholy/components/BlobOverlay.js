import styled from "styled-components";

const BlobOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 50;
  backface-visibility: hidden;
  /* perspective: 1000;
  transform: translate3d(0, 0, 0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0); */
  /* backdrop-filter: ${(props) =>
    props.avgFps < 40
      ? `none`
      : `brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7) saturate(0.88)`}; */

  backdrop-filter: brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7)
    saturate(0.88);
  /* backdrop-filter:  hue-rotate(-1deg) ; */
  /* backdrop-filter: blur(10px) hue-rotate(12deg) contrast(2); */
  pointer-events: none;
`;

export default BlobOverlay;
