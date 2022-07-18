import styled from "styled-components";
import { HiX } from "react-icons/hi";

const Backdrop = styled.div`
  transition: all 0.7s ease-in-out;
  height: 100vh;
  width: 100vw;
  z-index: 1000000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.isOpen ? "#0007" : "#0000")};
  pointer-events: ${(props) => (props.isOpen ? "fill" : "none")};
  ${(props) => props.isOpen && "backdrop-filter: blur(6px);"}
`;
const Window = styled.div`
  transition: all 0.3s ease-out;
  height: 93vh;
  width: 85vw;
  top: 50%;
  left: 50%;
  /* transform: scale(${(props) => (props.isOpen ? "1" : "0")}); */
  /* transform: scale(0.2); */
  /* transform: translate(-48.5%, -50%); */
  transform: translate(${(props) => (props.isOpen ? "-48.5%" : "-200%")}, -50%);
  /* transform: translate(-48.5%, ${(props) =>
    props.isOpen ? "-50%" : "-200%"}); */
  background-color: #fffc;
  z-index: 1000001;
  border-radius: 0.5rem /* 8px */;
  position: absolute;
  /* filter: drop-shadow(0 15px 20px rgb(0, 0, 0)); */
`;

export default function SlideMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Window isOpen={isOpen}>
        <HiX
          className="absolute text-5xl cursor-pointer text-gray-500 hover:text-amber-700 right-5 top-4 hover:scale-[1.2] hover:animate-spin rounded-full"
          onClick={() => setIsOpen(false)}
        />
      </Window>
    </>
  );
}
