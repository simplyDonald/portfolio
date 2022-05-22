import { motion } from "framer-motion";
import Socials from "./Socials";
import { items } from "techStack";


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


  const itemVariants = {
    initial: {
      opacity: 0,
      y: -50
    },
    animate: {
      opacity: 1,
      y: 0
      
    }
  };


  

  return (
    <motion.div
      className="fixed text-white font-extrabold grid grid-cols-3 grid-flow-col inset-0  z-10"
      key="sideMenu"
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit={{ x: 1000, transition: { duration: .7 } }}
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
          <ul 
            className="mb-8"
          >
            {items.map((item) => (
              <motion.li
                key={item.name}
                className="hover:text-[#64FFDA] text-4xl text-white block px-3 py-4 cursor-pointer"
                variants={itemVariants}
                onClick={toggle}
              >
                <a 
                  href={item.link}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li
              className="border border-[#64FFDA] ml-5   hover:bg-[#0c5745] text-[#64FFDA] text-2xl inline-block px-3 py-2 cursor-pointer rounded transition ease-in duration-300"
            >
              <a
                rel="noreferrer"
                href="https://resume.io/r/dAzgD3MkP"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>

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
