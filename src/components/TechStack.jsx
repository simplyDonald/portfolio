
import { frameworks } from "techStack";


const TechStack = () => {


  return (
    <div id="tech" className="h-full mb-48">
      <h2 className="stroke text-3xl mt-8 ml-8">Some tools in my toolbox</h2>
      <p className="font-body mt-2 text-center text-[#64FFDA]">
        I try to learn constantly and I've enjoyed working with these so far
      </p>
      <ul>
        <div className=" grid grid-cols-3 text-center mt-8 justify-items-center lg:grid-cols-6">
          {frameworks.map((item) => (
            <li key={item.name} className="fofo hover:filter-none w-10 m-8">
              {item.name}
              <img src={item.img} alt="" />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
 
export default TechStack
;