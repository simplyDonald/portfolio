import { motion } from "framer-motion";
import Socials from "./Socials";
import NavItems from "./NavItems";


const SideMenu = ({track, toggle}) => {

  const menuVariants = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: "0.1",
        when: "beforeChildren",
        staggerChildren: .1
        
      },
    },
  };


  return (
    <motion.div
      className="fixed text-white font-extrabold grid grid-cols-3 grid-flow-col inset-0  z-10"
      key="sideMenu"
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit={{ x: 1000, transition: { duration: .2 } }}
    >
      <div
        className=" backdrop-blur-md z-100"
        onClick={toggle}
      ></div>
      <div className="bg-[#112240]"></div>
      <div
        className="bg-[#112240] col-span-2 col-start-2 grid pt-0 pb-20"
      >
        <div
          className="flex flex-col justify-center items-center h-full pt-36"
        >
          <div className="mb-8">
            <NavItems track={track} toggle={toggle} layout="sideMenu" />
          </div>

          {/* Social Icons below */}
          <div className="pr-12">
            <Socials />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideMenu;
