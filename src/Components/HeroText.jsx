import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "Valeriu";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Hi, I'm{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
        <m.span
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="cursor-pointer text-4xl sm:text-5xl underline underline-offset-4 decoration-primary-400"
          id="repulse-span"
          style={{ fontFamily: "Morganite Extra Bold, sans-serif" }}
        >
        <a href="#about">
          <span className="text-primary-400">Front-end</span> Developer
        </a>
        </m.span>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
