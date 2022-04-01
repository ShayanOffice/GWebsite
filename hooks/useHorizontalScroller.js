import { useRef, useEffect, useState } from "react";
export default function useHorizontalScroller(
  scrollerRef,
  progressBarRef,
  scrollPathRef,
  bgRef
) {
  const [completion, setCompletion] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  let scroller = scrollerRef.current;
  let progressBar = progressBarRef.current;
  let scrollPath = scrollPathRef.current;

  let bg = bgRef.current;
  useEffect(() => {
    if (!scroller) scroller = scrollerRef.current;
    if (!scrollPath) scrollPath = scrollPathRef.current;

    if (!bg) bg = bgRef.current;

    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;

    function openFullscreen(event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
      }
    }
    function closeFullscreen(event) {
      if (
        (event.keyCode === 13 || event.keyCode === 32) &&
        document.fullscreenElement
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
    scroller.scrollTo({
      left: 0,
      behavior: "smooth",
    });
    bg.scrollTo({
      left: 0,
      behavior: "smooth",
    });

    let scrollProgress = Math.ceil(
      (scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth)) *
        100
    );
    setCompletion(scrollProgress);
    const scrollHorizontally = (e) => {
      if (e.deltaY == 0) return;
      e.preventDefault();
      // console.log(e.deltaY);
      scrollProgress = Math.ceil(
        (Math.min(
          scroller.scrollLeft + (e.deltaY * window.innerWidth) / 170,
          scroller.scrollWidth - scroller.getBoundingClientRect().width - 1
        ) /
          (scroller.scrollWidth - scroller.clientWidth)) *
          100
      );
      setCompletion(scrollProgress);

      scroller.scrollTo({
        left: Math.min(
          scroller.scrollLeft + (e.deltaY * window.innerWidth) / 170,
          scroller.scrollWidth - scroller.getBoundingClientRect().width - 1
        ),
        behavior: "smooth",
      });

      if (e.deltaY > 0) {
        if (
          scroller.scrollLeft <
          scroller.scrollWidth - scroller.getBoundingClientRect().width - 1
        ) {
          bg.scrollTo({
            left: Math.min(
              bg.scrollLeft + (e.deltaY * window.innerWidth) / 390,
              bg.scrollWidth - bg.getBoundingClientRect().width - 1
            ),
            behavior: "smooth",
          });
        }
      } else {
        if (scroller.scrollLeft > 0) {
          bg.scrollTo({
            left: Math.max(
              bg.scrollLeft + (e.deltaY * window.innerWidth) / 390,
              0
            ),
            behavior: "smooth",
          });
        }
      }
    };

    const updateScrollProgress = () => {
      let scrollProgress = Math.ceil(
        (scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth)) *
          100
      );
      setCompletion(scrollProgress);
      setScrollLeft(scroller.scrollLeft);
    };

    const handleClick = (event) => {
      const posXFact = (event.clientX / scroller.clientWidth) * 100;
      const targetScrollpx =
        (posXFact * (scroller.scrollWidth - scroller.clientWidth)) / 100;
      scroller.scrollTo({
        left: targetScrollpx,
        behavior: "smooth",
      });
      const delta = completion - posXFact;

      if (posXFact > 0) {
        bg.scrollTo({
          left: targetScrollpx,
          behavior: "smooth",
        });
      } else {
      }
      if (progressBar) progressBar.style.width = posXFact + "%";
      // console.log(targetScrollpx);
    };

    scroller.addEventListener("scroll", updateScrollProgress);
    scroller.addEventListener("wheel", updateScrollProgress);
    scroller.addEventListener("wheel", scrollHorizontally);
    document.addEventListener("keydown", openFullscreen);
    document.addEventListener("keydown", closeFullscreen);
    scrollPath.addEventListener("mousedown", handleClick);
    return () => {
      scroller.removeEventListener("scroll", updateScrollProgress);
      scroller.removeEventListener("wheel", updateScrollProgress);
      scroller.removeEventListener("wheel", scrollHorizontally);
      document.removeEventListener("keydown", openFullscreen);
      document.removeEventListener("keydown", closeFullscreen);
      scrollPath.removeEventListener("mousedown", handleClick);
    };
  }, []);
  useEffect(() => {
    if (!progressBar) progressBar = progressBarRef.current;
    if (progressBar) progressBar.style.width = completion + "%";
  }, [completion]);
  return {
    scrollLeft,
    completion,
  };
}
