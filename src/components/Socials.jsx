import { socials } from "techStack";
import { motion } from "framer-motion";

const Socials = () => {

  const iconVariants = {
    intial: {},
    onHover: {
      y: -10,
      scale: 1.15,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <div className="  text-[#8892B0] ">
      {socials.map((item) => {
        return (
          <li key={item.name} className="invert w-5 m-2 list-none inline-block">
            <a href={item.link} rel="noreferrer" target="_blank" className=" ">
              <motion.img
                variants={iconVariants}
                whileHover="onHover"
                src={item.img}
                alt="socials icon"
                className="hover:text-red-600"
              />
            </a>
          </li>
        );
      })}
    </div>
  );
}
 
export default Socials;