import classNames from "classnames";
import { items } from "techStack";


const NavItems = ({layout}) => {

  const navClass = classNames("hover:text-[#64FFDA]", "text-white","px-3","cursor-pointer", {
    "inline-block": `${layout}` === "topNav",
    "button--danger": `${layout}` === "sideMenu"
  });

  return (
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
  );
}
 
export default NavItems;