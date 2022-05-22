import { Spin as Hamburger } from "hamburger-react";
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


  return (
    <nav className=" backdrop-blur-sm fixed top-0 left-0 flex justify-between  py-4  px-5 z-10 items-center w-full transition-all ease-in-out duration-500 ">
      <div className="">
        <img
          src="hero-logo.png"
          alt="diamond logo"
          className={track ? "hidden" : " w-20 h-20 p-2 invert rotate-12"}
        />
      </div>

      <div
        className="py-4 cursor-pointer lg:hidden text-[#FFD700] hover:text-[#64FFDA] transition ease-in duration-300 z-30"
        onClick={toggle}
      >
        <Hamburger toggled={track} />
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="hidden lg:block"
      >
        <NavItems track={track} toggle={toggle} layout="topNav" />
      </motion.div>
    </nav>
  );
};

export default Nav;
