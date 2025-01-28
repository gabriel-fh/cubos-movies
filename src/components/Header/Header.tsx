import { Icon } from "@iconify/react";
import Button from "../Button";
import { CubosSvg } from "../Svg/Svg";
import { useState, useEffect } from "react";

const Header = () => {

  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="relative flex items-center justify-between p-4 border-b-2 border-b-mauvea6">
      <div className="flex items-center justify-start gap-2">
        <CubosSvg fill="#EEEEF0" className="w-32" />
        <h1 className="text-mauve12 font-bold">Movies</h1>
      </div>
      <Button variant="secondary" onClick={toggleTheme}>
        <Icon icon="eva:sun-fill" className="text-mauve12 text-2xl" />
      </Button>
    </header>
  )
}

export default Header