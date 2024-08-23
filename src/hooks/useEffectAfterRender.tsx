import { useEffect, useRef } from "react";

const useEffectAfterRender = (
  funcs: () => void | (() => void),
  dependencies: any[]
) => {
  const firstRender = useRef(true);
  useEffect(() => {
    console.log("ran")
    if (firstRender.current) {
      firstRender.current = false;
      return;
    } else {
      const cleanup = funcs();
      return () => {
        if (cleanup) cleanup();
      };
    }
  }, dependencies);
};

export default useEffectAfterRender;
