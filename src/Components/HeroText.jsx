import React from 'react'
import {motion} from 'framer-motion'

const HeroText = () => {
  return (
    <motion.div
          initial={{ x: -200, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-fit h-fit text-white absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
          id="repulse-div"
        >
          <h1
            className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
            style={{ fontFamily: "Vermin Vibes, sans-serif" }}
          >
            Hi, I'm{" "}
            <span className="text-[#69c67f]" style={{ fontSize: "1.2em" }}>
              Valeriu
            </span>
          </h1>
          <span
            className="cursor-pointer text-4xl sm:text-5xl underline underline-offset-4 decoration-[#69c67f]"
            id="repulse-span"
            style={{ fontFamily: "Morganite Extra Bold, sans-serif" }}
          >
            <span className="text-[#69c67f]">Front-end</span> Developer
          </span>
        </motion.div>
  )
}

export default HeroText