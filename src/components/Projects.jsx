import { techStack } from "techStack";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

function Projects() {
  const {ref, controls, itemVariants} = useScroll();

  const projects = techStack.map((item) => {
    return (
      <article
        key={item.name}
        className="relative grid grid-cols-12 grid-rows-1 mb-10 h-fit  hover:drop-shadow-3xl hover:animate-pulse"
        // initial={{ opacity: 0, x: -200 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
      >
        <motion.div
          className="col-start-3 col-end-11 lg:col-start-1 lg:col-end-8 text-center opacity-25 lg:opacity-100 row-span-1 row-start-1 "
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
        >
          <img
            src={item.img}
            alt={`screenshot of ${item.name} page`}
            className="fofo hover:filter-none transition ease-in-out delay-1000"
          />
        </motion.div>

        <motion.div
          className="col-start-3 col-end-11 row-start-1 font-body  grid grid-cols-1 lg:col-start-7 lg:col-end-13 z-10  "
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          treansition={{ duration: 1.2, ease:"easeIn" }}
          // viewport={{ once: true }}
        >
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
        </motion.div>
      </article>
    );
  });

  return (
    <motion.section
      id="projects"
      className="h-max mb-28"
      // variants={itemVariants}
      // ref={ref}
      // animate={controls}
      // initial={{opacity: 0, x: -200}}
      // whileInView={{opacity: 1, x: 0}}                                                                                                                                                                                                                                                
      // viewport={{once: true}}   

    >
      <h2 className="stroke text-3xl m-8 ">Some things I've built</h2>
      {projects}
    </motion.section>
  );
}

export default Projects;
