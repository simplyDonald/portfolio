const Projects = () => {
  return (
    <div id="projects" className="border border-green-500 h-full mt-5 ">
      <h2 className="stroke text-3xl m-8">Some things I've built</h2>
      <div className="relative flex border border-gray-500 h-96">
        <div className="border border-blue-700 w-8/12 h-12 text-center self-start">
          first content goes Here
        </div>
        <div className="border border-orange-300 w-2/4 h-max absolute right-14">
          <h2 className=" text-sm">Featured Project</h2>
          <h3>Tweeter</h3>
          <p className=" leading-4 m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aliquam hic dolor vel placeat quibusdam eveniet nostrum, consequatur
            facere odio, illum natus corporis repellendus nam voluptatibus
            assumenda tempore, laborum repudiandae.
          </p>
          <ul>
            <li className=" inline-block mr-2">techStack 1</li>
            <li className=" inline-block">techStack 2</li>
            <li className=" inline-block">techStack 3</li>
          </ul>
          <a href="https://www.flaticon.com/free-icons/github" title=" ">
            <img
              className="invert"
              src="github (1).png"
              alt="Github icons created by Pixel perfect - Flaticon"
              width="30"
              heigth="30"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;