import { useEffect } from "react";

export const usePreventScroll = (isPrevent?: boolean) => {
  useEffect(() => {
    if (isPrevent === undefined) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = isPrevent ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isPrevent]);
};
