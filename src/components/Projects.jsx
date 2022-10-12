import { techStack } from "techStack";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";


function Projects() {
  const { itemVariants } = useScroll();

  const projects = techStack.map((item) => {
    return (
      <motion.article
        key={item.name}
        className="relative grid grid-cols-12 grid-rows-1 mb-10 h-fit  hover:drop-shadow-3xl hover:animate-pulse"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        <div
          className="col-start-3 col-end-11 lg:col-start-1 lg:col-end-8 text-center  row-span-1 row-start-1 "
        >
          <img
            src={item.img}
            alt={`screenshot of ${item.name} page`}
            className=" fofo hover:filter-none transition ease-in-out delay-1000 object-cover opacity-25 lg:opacity-100"
          />
        </div>

        <div
          className="col-start-3 col-end-11 row-start-1 font-body  grid grid-cols-1 lg:col-start-7 lg:col-end-13 z-10 "
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
          <ul className=" py-6 justify-self-end text-xs text-[#8892B0] mr-4 ">
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
      </motion.article>
    );
  });

  return (
    <section
      id="projects"
      className="h-max mb-28"
  
    >
      <h2 className="stroke text-xl m-8 md:text-3xl">
        Some things I've built
      </h2>
      {projects}
    </section>
  );
}

export default Projects;
