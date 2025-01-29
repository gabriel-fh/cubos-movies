import { Icon } from "@iconify/react";
import Button from "../Button";
import { CubosSvg } from "../Svg/Svg";
import { useState, useEffect } from "react";
import { Link } from "react-router";

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
    <header id="header" className="relative flex items-center justify-between p-4 border-b-2 border-b-mauvea6">
      <div className="absolute -z-10 -top-32 left-0 w-full min-h-screen bg-[url(backgropund-krists-luhaers-unsplash.png)]
            bg-no-repeat bg-cover bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 
            before:bg-gradient-to-b before:from-mauve1 before:to-background before:via-mauve1/90"
      />
      <Link to={'/'} className="flex items-center justify-start gap-2">
        <CubosSvg fill={isDark ? '#EEEEF0' : 'rgb(33, 31, 38)'} className="w-32 lg:w-36" />
        <h1 className="text-mauve12 font-bold text-lg lg:text-xl">Movies</h1>
      </Link>
      <Button variant="secondary" onClick={toggleTheme}>
        <Icon icon="eva:sun-fill" className="text-mauve12 text-2xl" />
      </Button>
    </header>
  )
}

export default Header