const Nav = () => {
  // object for nav links
  const items = [
    { name: "01 About", link: "#about" },
    { name: "02 Projects", link: "#work" },
    { name: "03 TechStack", link: "#tech" },
    { name: "04 Resume", link: "#resume" }
  ];
  

  return (
    <nav className="flex container mx-auto py-4 justify-between">
      <div className="">
        <h1 className="hover:bg-red-900 hover:text-white text-2xl rounded-tr-full rounded-br-full p-2">
          <a href="#home">Donald</a>
        </h1>
      </div>

      <div className="">
        <ul className="counter(0)">
          {items.map((item) => (
            <li className="border-red-700 hover:text-white hover:bg-red-500 text-red-400 inline-block px-3 py-2 cursor-pointer rounded-full">
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