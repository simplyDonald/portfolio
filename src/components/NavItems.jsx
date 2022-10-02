import classNames from "classnames";
import { motion } from "framer-motion";
import { useCallback } from 'react';
import { items } from "techStack";


const NavItems = ({track,toggle,layout}) => {
  

  const toggleHandler = useCallback((tracker, toggleFn) => {
    if (tracker) {
      toggleFn();
    }
  }, []);

  const navClass = classNames("hover:text-[#64FFDA]", "text-white","px-3","cursor-pointer", {
    "inline-block py-2": `${layout}` === "topNav",
    " text-2xl block py-4": `${layout}` === "sideMenu"               
  });


  const resumeClass = classNames(
    "border border-[#64FFDA]   hover:bg-[#0c5745] text-[#64FFDA] inline-block px-3 py-2 cursor-pointer rounded transition ease-in duration-300",
    { "text-2xl ml-4": `${layout}` === "sideMenu" }
  );

  const itemVariants = {
    initial: {
      opacity: 0,
      y: -50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn"
      }
    },
  };


  return (
    <ul className={classNames({ "pr-8": `${layout}` === "topNav" })}>
      {items.map((item) => (
        <motion.li
          key={item.name}
          className={item.name === "Resume" ? resumeClass : navClass}
          variants={itemVariants}
          onClick={() => toggleHandler(track, toggle)}
        >
          <a
            href={item.link}
            target={item.name === "Resume" ? "_blank" : ""}
            rel="noreferrer"
          >
            {item.name}
          </a>
        </motion.li>
      ))}
      
    </ul>
  );
}

export default NavItems;