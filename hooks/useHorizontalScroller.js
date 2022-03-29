import { useRef, useEffect, useState } from 'react';
export default function useHorizontalScroller(scrollerRef, progressBarRef) {
  const [completion, setCompletion] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  let scroller = scrollerRef.current;
  let progressBar = progressBarRef.current;
  useEffect(() => {
    scroller = scrollerRef.current;
    progressBar = progressBarRef.current;
    const ScrollHorizontally = (e) => {
      if (!scroller) scroller = scrollerRef.current;
      if (e.deltaY == 0) return;
      e.preventDefault();
      scroller.scrollTo({
        left: scroller.scrollLeft + (e.deltaY * window.innerWidth) / 100,
        behavior: 'smooth',
      });
    };

    const updateScrollProgress = () => {
      if (!scroller) scroller = scrollerRef.current;
      let scrollProgress = Math.ceil(
        (scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth)) *
          100
      );
      setCompletion(scrollProgress);
      setScrollLeft(scroller.scrollLeft);
    };
    if (scroller) {
      scroller.addEventListener('scroll', updateScrollProgress);
      scroller.addEventListener('wheel', updateScrollProgress);
      scroller.addEventListener('wheel', ScrollHorizontally);
    }
    return () => {
      if (scroller) {
        scroller.removeEventListener('scroll', updateScrollProgress);
        scroller.removeEventListener('wheel', updateScrollProgress);
        scroller.removeEventListener('wheel', ScrollHorizontally);
      }
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
