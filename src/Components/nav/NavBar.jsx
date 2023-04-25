import { useEffect, useState, useRef } from "react";
import ToggleButton from "../elements/ToggleButton";
import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";
import SocialLinks from "../SocialLinks";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const body = document.body;

    isActive
      ? (body.style.overflowY = "hidden")
      : (body.style.overflowY = "auto");

    return () => {
      body.style.overflowY = "auto";
    };
  }, [isActive]);

  return (
    <nav
      ref={navRef}
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundImage:
          'url("https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png")',
      }}
      className={`${
        isActive
          ? "w-full h-full bg-primary-400 fixed z-50 flex-col"
          : "w-full bg-[rgba(0, 0, 0, 0)] fixed z-50"
      }`}
    >
      <ToggleButton isActive={isActive} handleClick={handleClick} />
      <div className={`${isActive ? "flex flex-col w-full h-full" : "hidden"} overflow-y-auto`}>
        <NavHeader handleClick={handleClick}/>
        <NavLinks handleClick={handleClick}/>
        <SocialLinks />
      </div>
    </nav>
  );
};

export default NavBar;
