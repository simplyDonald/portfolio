import Nav from "./Nav";

function Hero() {
  return (
    <div className="text-green-700 bg">
      <Nav />
      <div className="flex flex-col justify-center items-start h-screen pl-64 pb-48">
        <span className="text-sm p-5 text-white">Hi, my name is,</span>
        <p className="text-8xl text-[#6EBD9E]">
          Donald
          <span className="text-[#DEA185] font-body font-medium"> Abuah.</span>{" "}
        </p>
        <p className="text-white text-3xl">FullStack Software Developer</p>
        <p className="text-[#8892B0] text-4xl">
          I create easy to use web experiences with appealing designs
        </p>
      </div>
    </div>
  );
}

export default Hero;
