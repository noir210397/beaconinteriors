import { useEffect } from "react";

const useSpecificHeightScrolling = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let timer: number | null = null;

    function customScroll() {
      //   if (!timer) {
      // Set a timeout to throttle the scroll event
      // timer = window.setTimeout(() => {
      //   clearTimeout(timer!);
      //   timer = null; // Reset the timer so it can be set again
      // }, 600);
      // Get the current scroll position
      const currentScroll = document.documentElement.scrollTop;

      // Check if the user scrolled more than 200px from the last scroll position
      if (Math.abs(currentScroll - lastScrollTop) > 1000) {
        if (currentScroll > lastScrollTop) {
          // Scroll down by 200px
          window.scrollTo(0, lastScrollTop + 1000);
        } else {
          // Scroll up by 200px
          window.scrollTo(0, lastScrollTop - 1000);
        }

        // Update lastScrollTop with the current scroll position
        lastScrollTop = document.documentElement.scrollTop;
        // }
      }
    }

    window.addEventListener("scroll", customScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", customScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);
};

export default useSpecificHeightScrolling;
