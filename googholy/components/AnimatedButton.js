import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedButton({
  style,
  className,
  src,
  sizeX,
  sizeY,
  forward,
  speed,
  segment,
  FrameEvents,
}) {
  const ref = useRef();
  const [anim, setAnim] = useState();
  var animation;
  useEffect(() => {
    if (!anim?.animationID || anim?.animationID == '') {
      animation = lottie.loadAnimation({
        container: ref?.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: src, // the path to the animation json
        rendererSettings: {
          progressiveLoad: true,
          // preserveAspectRatio: 'xMidYMid meet',
        },
      });

      setAnim(animation);
      animation.addEventListener('DOMLoaded', Init);
      animation.addEventListener('enterFrame', EnteredFrame);
      animation.addEventListener('complete', Completed);
    } else {
      //   console.log('AnimID:', anim.animationID);
      animation?.removeEventListener('DOMLoaded', Init);
      animation?.removeEventListener('enterFrame', EnteredFrame);
      animation?.removeEventListener('complete', Completed);
    }
    // return () => {
    //   anim && anim.destroy();
    // };
  }, []);

  function Init() {
    // console.warn('Init');
    segment && animation.setSegment(segment[0], segment[1]);
    speed && animation.setSpeed(speed);
    segment
      ? animation.goToAndStop(segment[0], false)
      : animation.goToAndStop(0, false);
    // console.log(animation);
  }

  function EnteredFrame(e) {
    if (FrameEvents) {
      Object.keys(FrameEvents).forEach((frameNum) => {
        if (e.direction != FrameEvents[frameNum].currentDir) {
          if (Math.abs(e.currentTime - frameNum) < 1) {
            FrameEvents[frameNum](e, animation, ref.current);
            FrameEvents[frameNum].currentDir = e.direction;
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
  function Completed() {}

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ...style,
      }}
      className={className}
      onMouseEnter={() => {
        // console.log('anim:', anim);

        anim && anim.setDirection(1);
        anim && segment ? anim.playSegments(anim.segments) : anim.play();
      }}
      onMouseLeave={() => {
        // console.log('anim:', anim);
        if (forward) {
          anim && segment
            ? anim.goToAndStop(segment[0], false)
            : anim.goToAndStop(0, false);
        } else {
          anim && anim.setDirection(-1);
          anim && segment ? anim.playSegments(anim.segments) : anim.play();
        }
      }}
    >
      <div
        style={{
          flexShrink: '0',
          flexGrow: '0',
          pointerEvents: 'none',
          width: sizeX,
          height: sizeY,
        }}
        ref={ref}
      />
    </div>
  );
}
