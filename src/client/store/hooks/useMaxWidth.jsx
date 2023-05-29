import React, { useEffect, useState } from "react";

function useMaxWidth(selector) {

  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    function updateMaxWidth() {
      const nav = document.querySelector(selector);
      const navWidth = nav.offsetWidth;
      const windowWidth = window.innerWidth;
      const maxWidth = windowWidth - navWidth;
      setMaxWidth(maxWidth);
    }

    updateMaxWidth();

    window.addEventListener('resize', updateMaxWidth);

    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, [selector]);

  return maxWidth;
}

export default useMaxWidth