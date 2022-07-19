import lottie from "lottie-web";
// import lottie from "lottie-web/build/player/lottie_light";
import { useEffect, useRef, useState } from "react";

export default function LottieAnim({
  style,
  innerStyle,
  className,
  src,
  autoplay,
  playOnClick,
  loop,
  renderer,
  sizeX,
  sizeY,
  forward,
  speed,
  hoverSegment,
  mouseLeaveSegment,
  clickSegment,
  setLottieAnimation,
  elRef,
  onEnteredFrames,
  onInit,
  onCompleted,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onClick,
}) {
  const ref = useRef();
  const [anim, setAnim] = useState();
  var animation;

  var currentSegment = { name: NaN, range: [0, 99999999] };

  const setCurrentSegment = (anim, name, range, stop = false) => {
    if (!anim) {
      console.warn(
        "Lottie Animation isn't loaded while you're trying to set currentSegment"
      );
      return;
    }
    currentSegment = { name, range };
    anim.setSegment(range[0], range[1]);
    stop ? stopCurrSegment(anim) : startCurrSegment(anim);
  };

  const stopCurrSegment = (anim) => {
    if (!anim) {
      console.warn(
        "Lottie Animation isn't loaded while you're trying to stop currentSegment"
      );
      return;
    }
    anim.goToAndStop(currentSegment.range[0], false);
  };
  const startCurrSegment = (anim) => {
    if (!anim) {
      console.warn(
        "Lottie Animation isn't loaded while you're trying to start currentSegment"
      );
      return;
    }
    anim.playSegments(anim.segments);
  };

  useEffect(() => {
    if (elRef) if (ref.current) elRef.current = ref.current;
  }, [ref]);

  useEffect(() => {
    const lottieConfig = {
      container: ref.current, // the dom element that will contain the animation
      renderer: renderer ? renderer : "svg",
      loop: loop ? loop : false,
      autoplay: autoplay ? autoplay : false,
      path: src, // the path to the animation json
      rendererSettings: {
        progressiveLoad: true,
        // preserveAspectRatio: 'xMidYMid meet',
      },
    };
    if (!anim?.animationID || anim?.animationID == "") {
      animation = lottie.loadAnimation(lottieConfig);
      setAnim(animation);
      animation.addEventListener("DOMLoaded", Init);
      animation.addEventListener("enterFrame", EnteredFrame);
      animation.addEventListener("complete", Completed);
    } else {
      animation?.removeEventListener("DOMLoaded", Init);
      animation?.removeEventListener("enterFrame", EnteredFrame);
      animation?.removeEventListener("complete", Completed);
    }
  }, []);

  function Init() {
    // console.warn('Init');
    speed && animation.setSpeed(speed);
    if (hoverSegment) {
      setCurrentSegment(animation, "hoverSegment", hoverSegment, true);
    } else if (clickSegment) {
      setCurrentSegment(animation, "clickSegment", clickSegment, true);
    }
    setLottieAnimation && setLottieAnimation(animation);
    onInit && onInit();
  }

  function EnteredFrame(e) {
    if (onEnteredFrames) {
      Object.keys(onEnteredFrames).forEach((frameNum) => {
        var frameNumInSegments = frameNum - currentSegment.range[0];
        // console.log("frameNumInSegments", frameNumInSegments);
        // console.log("currentSegment", currentSegment);
        if (e.direction != onEnteredFrames[frameNum].onDirection) {
          if (Math.abs(e.currentTime - frameNumInSegments) < 1.5) {
            onEnteredFrames[frameNum](e, animation, ref.current);
            onEnteredFrames[frameNum].onDirection = e.direction;
          }
        }
      });
    }
    // console.log('enteredFrame', e);
    // {
    //   currentTime: 15.995978264221183;
    //   direction: -1;
    //   totalTime: 25;
    //   type: 'enterFrame';
    // }
  }
  function Completed() {
    onCompleted && onCompleted();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        ...style,
      }}
      className={className}
      onMouseEnter={(e) => {
        if (anim) {
          anim.setDirection(1);
          if (hoverSegment) {
            setCurrentSegment(anim, "hoverSegment", hoverSegment);
          } else if (!autoplay && !playOnClick && !clickSegment) anim.play();
        }
        onMouseEnter && onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        if (anim) {
          if (forward) {
            if (mouseLeaveSegment) {
              setCurrentSegment(anim, "mouseLeaveSegment", mouseLeaveSegment);
              anim.goToAndPlay(mouseLeaveSegment[0], false);
            } else if (hoverSegment) {
              setCurrentSegment(anim, "hoverSegment", hoverSegment, true);
            } else anim.goToAndStop(0, false);
          } else {
            anim.setDirection(-1);
            if (mouseLeaveSegment) {
              setCurrentSegment(anim, "mouseLeaveSegment", mouseLeaveSegment);
            } else if (hoverSegment) {
              setCurrentSegment(anim, "hoverSegment", hoverSegment);
            } else if (!autoplay && !playOnClick && !clickSegment) anim.play();
          }
        }

        onMouseLeave && onMouseLeave(e);
      }}
      onClick={(e) => {
        if (anim) {
          if (clickSegment) {
            setCurrentSegment(anim, "clickSegment", clickSegment);
            anim.goToAndPlay(clickSegment[0], false);
          } else if (playOnClick) {
            anim.goToAndPlay(0, false);
          }
        }
        onClick && onClick(e);
      }}
      onMouseMove={(e) => {
        onMouseMove && onMouseMove(e);
      }}
    >
      <div
        style={{
          flexShrink: "0",
          flexGrow: "0",
          pointerEvents: "none",
          width: sizeX ? sizeX : "100%",
          height: sizeY ? sizeY : "100%",
          ...innerStyle,
        }}
        ref={ref}
      />
    </div>
  );
}
