import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindWidthChg = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindWidthChg);

    return () => window.removeEventListener("resize", handleWindWidthChg);
  }, []);

  return width;
};
