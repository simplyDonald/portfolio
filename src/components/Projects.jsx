import { projectItems } from "techStack";
import ProjectTab from "./ProjectTab";


function Projects() {

  

  return (
    <section id="projects" className="flex flex-col h-screen mb-28 ">
      <h2 className="stroke text-xl p-8 md:text-3xl">Some things I've built</h2>
      <div className=" mt-14 grid grid-cols-5 gap-0  h-[700px] p-16 grid-rows-6 grid-flow-col ">
        {projectItems.map((item) => (
          <ProjectTab name={item.name} link={item.link} color={item.color} logo={item.logo} gridstamp={item.gridstamp} />
        ))}
        
      </div>
      {/* {projects} */}
    </section>
  );
}

export default Projects;
