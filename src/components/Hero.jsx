import Nav from "./Nav";

function Hero() {
  return (
    <div className="text-green-700 bg grid">
      <Nav />
      <div className="flex flex-col justify-center items-start h-screen lg:pl-64 pl-20 pb-48">
        <span className="text-[#FFD700] text-sm p-5 pl-2 text-white">
          Hi, my name is
        </span>
        <p className="text-8xl font-black text-[#6EBD9E] ">
          Donald
          <span className="text-[#FFD700] y pl-0 font-sans"> Abuah.</span>{" "}
        </p>
        <p className="text-white text-3xl pl-2 font-body">
          <span className="italic">FullStack</span> <span className="font-semibold"> Software Developer</span> 
        </p>
        <p className="text-[#d8f3dc] text-base pl-2 leading-6 max-w-lg mt-3 font-body">
          I’m a software developer specializing in creating easy to use web
          experiences with engaging and appealing design.
        </p>
      
      </div>
    </div>
  );
}

export default Hero;
