import { Icon } from "@iconify/react";
import CubosSvg from "../Icon/Icon";
import Button from "../Button";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b-2 border-b-mauve-a6 m-0">
      <div className="flex items-center justify-start gap-2">
        <CubosSvg fill="#EEEEF0" className="w-32" />
        <h1 className="text-mauve-12 font-bold">Movies</h1>
      </div>
      <Button>
        <Icon icon="eva:sun-fill" className="text-white text-2xl" />
      </Button>
    </header>
  )
}

export default Header