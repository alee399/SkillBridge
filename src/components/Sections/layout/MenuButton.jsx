import { Menu, X } from "lucide-react";

const MenuIcon = ({open, setShowDrop}) => {

  return (
    <button
      onClick={() => setShowDrop(!open)}
      className="relative w-8 h-8 flex justify-center items-center cursor-pointer"
    >
      <Menu
        size={32}
        className={`
          absolute
          transition-all duration-300 ease-in-out
          ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
        `}
      />

      <X
        size={32}
        className={`
          absolute
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
        `}
      />
    </button>
  );
};

export default MenuIcon;
open