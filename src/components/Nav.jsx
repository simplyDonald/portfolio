const Nav = () => {
  // object for nav links
  const items = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#work" },
    { name: "TechStack", link: "#tech" },
    { name: "Resume", link: "#resume" }
  ];
  

  return (
    <nav className="flex container mx-auto py-4 mt-2 justify-between">
      <div className="">
        <h1 className="text-4xl hover:bg-blue-700">
          <a href="#home">Donald</a>
        </h1>
      </div>

      <div className="">
        <ul>
          {items.map((item) => (
            <li className="text-red-400 inline-block px-3 py-2 cursor-pointer">
              <a key={item.name} href={items.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
 
export default Nav;