import { useState, useEffect } from "react";

export const useResize = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const verify= () => {
    const check =
      window.innerWidth > 639;
    setIsTablet(check);
  };

  useEffect(() => {
    verify();

    window.addEventListener("resize", verify);

    return () => {
      window.removeEventListener("resize", verify);
    };
  }, []);

  return { isTablet };
};