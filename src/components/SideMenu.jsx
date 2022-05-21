import { socials } from "techStack";  
// import { Spin as Hamburger } from "hamburger-react";


const SideMenu = ({track, toggle}) => {
  const items = [
    { name: "About", link: "#about" } ,
    { name: "Projects", link: "#projects" },
    { name: "TechStack", link: "#tech" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed text-white font-extrabold grid grid-cols-3 grid-flow-col inset-0  z-10">
      <div className=" backdrop-blur-md z-100" onClick={toggle}></div>
      <div className="bg-[#112240]"></div>
      <div className="bg-[#112240] col-span-2 col-start-2 grid pt-0 pb-20">

        <div className="flex flex-col justify-center items-center h-full pt-36">
          <ul className="mb-8">
            {items.map((item) => (
              <li
                key={item.name}
                className="hover:text-[#64FFDA] text-4xl text-white block px-3 py-4 cursor-pointer"
                onClick={toggle}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
            <li className="border border-[#64FFDA] ml-5   hover:bg-[#0c5745] text-[#64FFDA] text-2xl inline-block px-3 py-2 cursor-pointer rounded transition ease-in duration-300">
              <a
                rel="noreferrer"
                href="https://resume.io/r/dAzgD3MkP"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Social Icons below */}
          <div className=" text-[#8892B0] pr-12">
            {socials.map((item) => {
              return (
                <li
                  key={item.name}
                  className="invert w-5 m-2 list-none inline-block"
                >
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className=" "
                  >
                    <img src={item.img} alt="socials icon" className="" />
                  </a>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
