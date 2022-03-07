const Nav = () => {
  // object for nav links
  const items = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#work" },
    { name: "TechStack", link: "#tech" }
  ];
  

  return (
    <nav className="flex py-4 justify-between mx-10">
      <div className="">
        <h1 className="text-2xl p-2 border border-[#64FFDA]">
          <a href="#home" className="text-white">
            Donald
          </a>
        </h1>
      </div>

      <div className="">
        <ul className="">
          {items.map((item) => (
            <li className="hover:text-[#64FFDA] text-white inline-block px-3 py-2 cursor-pointer">
              <a key={item.name} href={items.link}>
                {item.name}
              </a>
            </li>
          ))}
          <li className="border border-[#64FFDA]   hover:bg-[#0c5745] text-[#64FFDA] inline-block px-3 py-2 cursor-pointer rounded">
            <a href="#Resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Nav;