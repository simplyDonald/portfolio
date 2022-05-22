import { Spin as Hamburger } from "hamburger-react";
import NavItems from "./NavItems";



const Nav = ({track, toggle}) => {


  return (
    <nav className=" backdrop-blur-sm fixed top-0 left-0 flex justify-between  py-4  px-5 z-10 items-center w-full transition-all ease-in-out duration-500 ">
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
        <NavItems layout="topNav" />
      </div>
    </nav>
  );
};

export default Nav;
