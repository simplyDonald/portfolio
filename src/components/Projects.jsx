const Projects = () => {
  return (
    <div id="projects" className="border border-green-500 h-full mt-5 ">
      <h2 className="stroke text-3xl m-8">Some things I've built</h2>
      <div className="relative flex border border-gray-500 h-96">
        <div className="border border-blue-700 w-8/12 h-80 text-center self-start">
          <img src="tweeter_snap1.png" alt="" />
        </div>
        <div className="border border-orange-300 w-2/4 h-max absolute font-body right-14 grid grid-cols-1">
          <h2 className=" mt-2 text-sm text-[#64FFDA] justify-self-end">
            Featured Project
          </h2>
          <h3 className="text-xl justify-self-end">Tweeter</h3>
          <p className=" leading-4 m-5 bg-[#112240] text-left p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aliquam hic dolor vel placeat quibusdam eveniet nostrum, consequatur
            facere odio, illum natus corporis repellendus nam voluptatibus
            assumenda tempore, laborum repudiandae.
          </p>
          <ul className=" py-6 justify-self-end text-xs text-[#8892B0] mr-4">
            <li className=" inline-block mr-2">techStack1</li>
            <li className=" inline-block">techStack2</li>
            <li className=" inline-block">techStack3</li>
          </ul>
          <a
            href="https://github.com/simplyDonald/tweeter"
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
    </div>
  );
}
 
export default Projects;