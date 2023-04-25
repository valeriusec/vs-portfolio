const NavLinks = ({ handleClick }) => {
  return (
    <div className="w-full h-full">
      <ul className="h-full w-full flex flex-col items-center justify-center">
        <li
          className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3"
          onClick={handleClick}
        >
          <a href="#about">About me</a>
        </li>
        <li
          className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3"
          onClick={handleClick}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3"
          onClick={handleClick}
        >
          <a href="#certificates">Certificates</a>
        </li>
        <li
          className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3"
          onClick={handleClick}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className="border-t-[1px] border-b-[1px] border-grayscale-950 w-full flex justify-center p-3"
          onClick={handleClick}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
