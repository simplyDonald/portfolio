import { useEffect } from 'react';
import { techStack } from "techStack";



  function Projects() {
    useEffect(() => {
    }, []);

    const projects = techStack.map((item)=>{
      return (
        <div key={item.name} className="relative flex mb-4 h-96">
          
          <div className="w-6/12 h-80 text-center self-start">
            <img
              src={item.img}
              alt={`screenshot of ${item.name} page`}
              className="fofo hover:filter-none transition ease-out delay-700 hover:cursor-pointer"
            />
          </div>

          <div className="w-2/4 h-max absolute font-body right-14 grid grid-cols-1">
            <h2 className=" mt-2 text-sm text-[#64FFDA] justify-self-end">
              Featured Project
            </h2>
            <h3 className="text-xl justify-self-end text-[#FFD700]">{item.name}</h3>
            <p className=" leading-4 m-5 bg-[#112240] text-left p-6">
              {item.desc}
            </p>
            <ul className=" py-6 justify-self-end text-xs text-[#8892B0] mr-4">
              {item.stack.map((stk)=> <li key={stk} className=" inline-block mr-2">{stk}</li>)}
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
    })

    return (
      <div id="projects" className="h-max mt-5">
        <h2 className="stroke text-3xl m-8">Some things I've built</h2>
        {projects}
      </div>
    );
  }
 
export default Projects;