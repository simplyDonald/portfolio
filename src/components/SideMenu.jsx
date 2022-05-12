const SideMenu = () => {

  const items = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "TechStack", link: "#tech" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed text-white font-extrabold grid grid-cols-3 h-full w-full bg-[#112240] z-10">
      <div>1</div>
      <div>2</div>
      <div className=" col-span-2 col-start-2 pt-0 pb-20">
        <div className="flex justify-center h-full ">
          <ul className="">
            {items.map((item) => (
              <li
                key={item.name}
                className="hover:text-[#64FFDA] text-4xl text-white block px-3 py-4 cursor-pointer"
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
        </div>
      </div>
    </div>
  );
}
 
export default SideMenu;