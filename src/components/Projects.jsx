import { techStack } from "techStack";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

function Projects() {
  const {ref, controls, itemVariants} = useScroll();

  const projects = techStack.map((item) => {
    return (
      <div
        key={item.name}
        className="relative flex mb-4  justify-center lg:justify-start"
      >
        <div className="w-6/12 h-80 text-center opacity-25 lg:opacity-100">
          <img
            src={item.img}
            alt={`screenshot of ${item.name} page`}
            className="fofo hover:filter-none transition ease-in-out delay-1000"
          />
        </div>

        <div className="w-2/4 h-max font-body  grid grid-cols-1 lg:right-14 absolute  ">
          <h2 className=" mt-2 text-sm text-[#64FFDA] justify-self-end title">
            Featured Project
          </h2>
          <h3 className="text-xl justify-self-end text-[#FFD700]">
            {item.name}
          </h3>
          <p className=" leading-4 m-5 bg-[#112240] text-left p-6">
            {item.desc}
          </p>
          <ul className=" py-6 justify-self-end text-xs text-[#8892B0] mr-4">
            {item.stack.map((stk) => (
              <li key={stk} className=" inline-block mr-2">
                {stk}
              </li>
            ))}
          </ul>
          <a
            href={item.github}
            rel="noreferrer"
            className="justify-self-end mr-4"
            target="_blank"
          >
            <img
              className="invert pb-1"
              src="github-icon.png"
              alt="Github icons created by Pixel perfect - Flaticon"
              width="20"
              heigth="20"
            />
          </a>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      id="projects"
      className="h-max mb-28"
      variants={itemVariants}
      ref={ref}
      initial="hidden"              
      animate={controls}
    >
      <h2 className="stroke text-3xl m-8 ">Some things I've built</h2>
      {projects}
    </motion.div>
  );
}

export default Projects;
