import classNames from "classnames";
import { motion } from "framer-motion";
import { items } from "techStack";


const NavItems = ({layout}) => {

  const navClass = classNames("hover:text-[#64FFDA]", "text-white","px-3","cursor-pointer", {
    "inline-block py-2": `${layout}` === "topNav",
    "text-4xl block py-4": `${layout}` === "sideMenu"               
  });


  const resumeClass = classNames(
    "border border-[#64FFDA]   hover:bg-[#0c5745] text-[#64FFDA] inline-block px-3 py-2 cursor-pointer rounded transition ease-in duration-300",
    { "text-2xl ml-4": `${layout}` === "sideMenu" }
  );

  const itemVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const resumeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeIn"
      },
    },
  };

  return (
    <ul>
      {items.map((item) => (
        <motion.li 
          key={item.name} 
          className={navClass} 
          variants={itemVariants}
        >
          <a href={item.link}>{item.name}</a>
        </motion.li>
      ))}
      <motion.li variants={resumeVariants} className={resumeClass}>
        <a
          rel="noreferrer"
          href="https://resume.io/r/dAzgD3MkP"
          target="_blank"
        >
          Resume
        </a>
      </motion.li>
    </ul>
  );
}
 
export default NavItems;