const NavLinks = ({ handleClick }) => {
  return (
    <div className="w-full h-full">
      <ul className="h-full w-full flex flex-col items-center justify-center font-medium text-lg">
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#about"
          >
            About me
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#certificates"
          >
            Certificates
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li className="border-t-[1px] border-b-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
