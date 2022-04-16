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

  function updateCompletion() {
    let scrollProgress = Math.min(
      Math.ceil(
        (scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth)) *
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
    updateCompletion();
  }

  useEffect(() => {
    if (!scroller) scroller = scrollerRef.current;
    if (!scrollPath) scrollPath = scrollPathRef.current;
    if (!bg) bg = bgRef.current;
    resetCompletion();

    var elem = document.documentElement;
    function handleKeyDown(event) {
      handleArrowKeys(event);
      handleFullscreen(event);
    }

    const handleFullscreen = (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        // entering fullscreen

        scrollLeft = scroller.scrollLeft;
        const pageNum =
          Math.ceil(
            (scroller.scrollLeft + scroller.getBoundingClientRect().width / 2) /
              scroller.getBoundingClientRect().width
          ) - 1;
        const intervalId = setInterval(() => {
          console.log(pageNum);
          let targetPx = pageNum * scroller.getBoundingClientRect().width;
          scroller.scrollTo({
            left: targetPx,
            behavior: "smooth",
          });
          
          updateCompletion();
          // resetCompletion();
          clearInterval(intervalId);
        }, 100);
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY == 0) return;
      e.preventDefault();
      ScrollEndCapped(scroller, e.deltaY, 170);
      ScrollSecondary(e.deltaY, scroller, bg);
    };

    const handleArrowKeys = (event) => {
      if (event.keyCode === 39 || event.keyCode === 40) {
        event.preventDefault();
        ScrollEndCapped(scroller, 100, 170);
        ScrollSecondary(100, scroller, bg);
      } else if (event.keyCode === 37 || event.keyCode === 38) {
        event.preventDefault();
        ScrollEndCapped(scroller, -100, 170);
        ScrollSecondary(-100, scroller, bg);
      }
    };

    const updateScrollProgress = () => {
      updateCompletion();
      scrollLeft = scroller.scrollLeft;
    };

    const handleClick = (event) => {
      const posXFact = (event.clientX / scroller.clientWidth) * 100;
      const getTargetPx = (scrollable, factor) => {
        return (
          (factor * (scrollable.scrollWidth - scrollable.clientWidth)) / 100
        );
      };
      scroller.scrollTo({
        left: getTargetPx(scroller, posXFact),
        behavior: "smooth",
      });
      bg.scrollTo({
        left: getTargetPx(bg, posXFact),
        behavior: "smooth",
      });
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
          ScrollSecondary(100, scroller, bg);
        } else {
          /* left swipe */
          ScrollEndCapped(scroller, -100, 170);
          ScrollSecondary(-100, scroller, bg);
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

    scroller.addEventListener("wheel", handleWheel);
    scroller.addEventListener("scroll", updateScrollProgress);
    scroller.addEventListener("wheel", updateScrollProgress);
    scroller.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    scroller.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    scrollPath.addEventListener("mousedown", handleClick);
    return () => {
      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("scroll", updateScrollProgress);
      scroller.removeEventListener("wheel", updateScrollProgress);
      scroller.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      scroller.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.removeEventListener("keydown", handleKeyDown);
      scrollPath.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!progressBar) progressBar = progressBarRef.current;
    if (progressBar) progressBar.style.width = completion + "%";
    scrollLeft = scroller.scrollLeft;
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
