import { Slant as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import NavItems from "./NavItems";                                       



const Nav = ({track, toggle}) => {

  const containerVariants = {
    initial: {
      y: -50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: "0.5",
        when: "beforeChildren",
        staggerChildren: 0.2
      },
    },
  };

  const hamburgerVariants = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      duration: .2
    }
  };


  return (
    <nav className=" backdrop-blur-sm fixed top-0 left-0 flex justify-between  py-4  px-5 z-10 items-center w-full transition-all ease-in-out duration-500 ">
      <div className={track ? "hidden" : " w-16 p-2 invert rotate-12"}>
        <a rel="noreferrer" href="https://donaldabuah.com">
          <img
            src="compass.svg"
            alt="compass logo"
            className=""
          />
        </a>
      </div>

      <motion.div
        className="py-4 cursor-pointer lg:hidden text-[#FFD700] hover:text-[#64FFDA] transition ease-in duration-300 z-30"
        variants={hamburgerVariants}
        initial="initial"
        animate="animate"
        onClick={toggle}
      >
        <Hamburger toggled={track} />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="hidden lg:block"
      >
        <NavItems layout="topNav" />
      </motion.div>
    </nav>
  );
};

export default Nav;
