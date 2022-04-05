import { socials } from "techStack";


const Socials = () => {
 
  return (
    <div className=" hidden fixed bottom-0 lg:block left-4  text-[#8892B0]">
      {socials.map((item) => {
        return (
          <li
            key={item.name}
            className="invert w-5 m-1 list-none inline-block "
          >
            <a
              href={item.link}
              rel="noreferrer"
              target="_blank"
              className="hover:text-[#64FFDA]"
            >
              <img src={item.img} alt="socials icon" className="" />
            </a>
          </li>
        );
      })}
    </div>
  );
}
 
export default Socials;