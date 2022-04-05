import { useRef, useEffect, useState } from "react";
export default function useHorizontalScroller(
  scrollerRef,
  progressBarRef,
  scrollPathRef,
  bgRef,
  pageCount,
  setPageCount,
  selectedDot,
  setSelectedDot,
  sensedClick
) {
  const [completion, setCompletion] = useState(0);
  let scrollLeft = 0;

  let scroller = scrollerRef.current;
  let progressBar = progressBarRef.current;
  let scrollPath = scrollPathRef.current;
  let bg = bgRef.current;

  function ScrollSecondary(delta, Primary, Sec) {
    if (delta > 0) {
      if (
        Primary.scrollLeft <
        Primary.scrollWidth - Primary.getBoundingClientRect().width - 1
      ) {
        Sec.scrollTo({
          left: Math.min(
            Sec.scrollLeft + (delta * window.innerWidth) / 390,
            Sec.scrollWidth - Sec.getBoundingClientRect().width - 1
          ),
          behavior: "smooth",
        });
      }
    } else {
      if (Primary.scrollLeft > 0) {
        Sec.scrollTo({
          left: Math.max(Sec.scrollLeft + (delta * window.innerWidth) / 390, 0),
          behavior: "smooth",
        });
      }
    }
  }

  function ScrollEndCapped(scrollable, delta, divisionFactor) {
    scrollable.scrollTo({
      left: Math.min(
        scrollable.scrollLeft + (delta * window.innerWidth) / divisionFactor,
        scrollable.scrollWidth - scrollable.getBoundingClientRect().width - 1
      ),
      behavior: "smooth",
    });
  }

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

    resetCompletion();
    let scrollProgress = updateCompletion();
    const handleWheel = (e) => {
      if (e.deltaY == 0) return;
      e.preventDefault();
      scrollProgress = updateCompletion();

      ScrollEndCapped(scroller, e.deltaY, 170);
      scrollProgress = updateCompletion();

      ScrollSecondary(e.deltaY, scroller, bg);
    };

    const updateScrollProgress = () => {
      updateCompletion();
      scrollLeft = scroller.scrollLeft;
    };

    const handleClick = (event) => {
      const posXFact = (event.clientX / scroller.clientWidth) * 100;
      const targetScrollpx =
        (posXFact * (scroller.scrollWidth - scroller.clientWidth)) / 100;
      scroller.scrollTo({
        left: targetScrollpx,
        behavior: "smooth",
      });
      if (posXFact > 0) {
        bg.scrollTo({
          left: targetScrollpx,
          behavior: "smooth",
        });
      } else {
      }
      if (progressBar) progressBar.style.width = posXFact + "%";
    };

    var xDown = null;
    var yDown = null;
    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }
    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
    function handleTouchMove(evt) {
      // evt.preventDefault();
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* right swipe */
          ScrollEndCapped(scroller, 100, 170);
          scrollProgress = updateCompletion();
          ScrollSecondary(100, scroller, bg);
          scrollProgress = updateCompletion();
        } else {
          /* left swipe */
          ScrollEndCapped(scroller, -100, 170);
          scrollProgress = updateCompletion();
          ScrollSecondary(-100, scroller, bg);
          scrollProgress = updateCompletion();
          // console.log("left");
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    scroller.addEventListener("scroll", updateScrollProgress);
    scroller.addEventListener("wheel", updateScrollProgress);
    scroller.addEventListener("wheel", handleWheel);
    scroller.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    scroller.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("keydown", openFullscreen);
    document.addEventListener("keydown", closeFullscreen);
    scrollPath.addEventListener("mousedown", handleClick);
    return () => {
      scroller.removeEventListener("scroll", updateScrollProgress);
      scroller.removeEventListener("wheel", updateScrollProgress);
      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      scroller.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.removeEventListener("keydown", openFullscreen);
      document.removeEventListener("keydown", closeFullscreen);
      scrollPath.removeEventListener("mousedown", handleClick);
    };

    function updateCompletion() {
      let scrollProgress = Math.min(
        Math.ceil(
          (scroller.scrollLeft /
            (scroller.scrollWidth - scroller.clientWidth)) *
            100
        ),
        100
      );
      setCompletion(scrollProgress);
      return scrollProgress;
    }

    function resetCompletion() {
      scroller.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      bg.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (!progressBar) progressBar = progressBarRef.current;
    if (progressBar) progressBar.style.width = completion + "%";

    const pageNum =
      Math.ceil(
        (scroller.scrollLeft + scroller.getBoundingClientRect().width / 2) /
          scroller.getBoundingClientRect().width
      ) - 1;

    if (pageCount.active !== pageNum) {
      setPageCount((prev) => ({ ...prev, active: pageNum }));
    }
  }, [completion]);

  useEffect(() => {
    let targetPx = selectedDot * scroller.getBoundingClientRect().width;
    scroller.scrollTo({
      left: targetPx,
      behavior: "smooth",
    });
    let delta = (selectedDot - pageCount.active) * 100;
    ScrollSecondary(delta, scroller, bg);
    if (!progressBar) progressBar = progressBarRef.current;
    if (progressBar) progressBar.style.width = completion + "%";
  }, [sensedClick]);
  return {
    scrollLeft,
    completion,
  };
}
