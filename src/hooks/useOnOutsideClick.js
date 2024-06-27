import { useEffect, useRef } from "react";

const useOnOutsideClick = (handlerClose, listenCapturing = true) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handlerClose();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handlerClose, listenCapturing]);

  return { ref };
};

export default useOnOutsideClick;
