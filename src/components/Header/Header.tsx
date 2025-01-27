import { Icon } from "@iconify/react";
import Button from "../Button";
import { CubosSvg } from "../Svg/Svg";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between p-4 border-b-2 border-b-mauvea6">
      <div className="flex items-center justify-start gap-2">
        <CubosSvg fill="#EEEEF0" className="w-32" />
        <h1 className="text-mauve12 font-bold">Movies</h1>
      </div>
      <Button variant="secondary">
        <Icon icon="eva:sun-fill" className="text-mauve12 text-2xl" />
      </Button>
    </header>
  )
}

export default Header