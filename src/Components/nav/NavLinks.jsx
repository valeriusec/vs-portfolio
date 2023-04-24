const NavLinks = () => {
  return (
    <div className="w-full h-full">
      <ul className="h-full w-full flex flex-col items-center justify-center">
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          About Me
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          Projects
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          Skills
        </li>
        <li className="border-t-[1px] border-b-[1px] border-grayscale-950 w-full flex justify-center p-3">
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
