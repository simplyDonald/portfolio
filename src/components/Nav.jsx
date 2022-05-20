import { Spin as Hamburger } from "hamburger-react";


const Nav = ({track, toggle}) => {
  // object for nav links
  const items = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "TechStack", link: "#tech" },
    { name: "Contact", link: "#contact" },
  ];

 


  return (
    <nav className=" backdrop-blur-sm fixed top-0 left-0 flex justify-between  py-4  px-5 z-10 items-center w-full transition-all ease-in-out duration-200 ">
      <div className="">
        <img
          src="hero-logo.png"
          alt="diamond logo"
          className={track ? "hidden" : " w-20 h-20 p-2 invert rotate-12"}
        />
      </div>

      <div
        className="py-4 cursor-pointer lg:hidden text-[#FFD700] hover:text-[#64FFDA] transition ease-in duration-300 z-30"
        onClick={toggle}
      >
        <Hamburger toggled={track} />
      </div>
      <div className="hidden lg:block">
        <ul className="">
          {items.map((item) => (
            <li
              key={item.name}
              className="hover:text-[#64FFDA] text-white inline-block px-3 py-2 cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li className="border border-[#64FFDA]   hover:bg-[#0c5745] text-[#64FFDA] inline-block px-3 py-2 cursor-pointer rounded transition ease-in duration-300">
            <a
              rel="noreferrer"
              href="https://resume.io/r/dAzgD3MkP"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
