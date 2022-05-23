
import { frameworks } from "techStack";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";


const TechStack = () => {
  const { ref, controls, itemVariants } = useScroll();

    const containerVariants = {
      initial: {
        y: -50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: "0.5",
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

  return (
    <motion.div
      id="tech"
      className="h-full mb-48 flex flex-col"
      variants={itemVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <h2 className=" text-3xl mt-8 ml-8 text-center">
        Some tools in my toolbox
      </h2>
      <p className="font-body mt-2 p-4 self-center text-center text-[#8892B0]  w-80">
        I try to learn constantly and I've enjoyed working with these so far
      </p>
      <motion.ul
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className=" grid grid-cols-3 gap-0 text-center mt-8 justify-items-center lg:grid-cols-6 w-96 lg:w-auto mx-auto">
          {frameworks.map((item) => (
            <li
              key={item.name}
              className="fofo hover:filter-none w-10 m-4 transition ease-in duration-300"
            >
              {item.name}
              <img src={item.img} alt="" />
            </li>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  );
}
 
export default TechStack
;