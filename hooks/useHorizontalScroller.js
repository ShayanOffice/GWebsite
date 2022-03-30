import { useRef, useEffect, useState } from 'react';
export default function useHorizontalScroller(
  scrollerRef,
  progressBarRef,
  scrollPathRef
) {
  const [completion, setCompletion] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  let scroller = scrollerRef.current;
  let progressBar = progressBarRef.current;
  let scrollPath = scrollPathRef.current;
  useEffect(() => {
    if (!scroller) scroller = scrollerRef.current;
    if (!scrollPath) scrollPath = scrollPathRef.current;

    const scrollHorizontally = (e) => {
      if (e.deltaY == 0) return;
      e.preventDefault();
      // console.log(
      //   Math.min(
      //     scroller.scrollLeft + (e.deltaY * window.innerWidth) / 170,
      //     scroller.scrollWidth - scroller.getBoundingClientRect().width - 1
      //   )
      // );
      scroller.scrollTo({
        left: Math.min(
          scroller.scrollLeft + (e.deltaY * window.innerWidth) / 170,
          scroller.scrollWidth - scroller.getBoundingClientRect().width - 1
        ),
        behavior: 'smooth',
      });
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
        behavior: 'smooth',
      });
      if (progressBar) progressBar.style.width = posXFact + '%';
      // console.log(targetScrollpx);
    };

    scroller.addEventListener('scroll', updateScrollProgress);
    scroller.addEventListener('wheel', updateScrollProgress);
    scroller.addEventListener('wheel', scrollHorizontally);
    scrollPath.addEventListener('mousedown', handleClick);
    return () => {
      scroller.removeEventListener('scroll', updateScrollProgress);
      scroller.removeEventListener('wheel', updateScrollProgress);
      scroller.removeEventListener('wheel', scrollHorizontally);
      scrollPath.removeEventListener('mousedown', handleClick);
    };
  }, []);
  useEffect(() => {
    if (!progressBar) progressBar = progressBarRef.current;
    if (progressBar) progressBar.style.width = completion + '%';
  }, [completion]);
  return {
    scrollLeft,
    completion,
  };
}
