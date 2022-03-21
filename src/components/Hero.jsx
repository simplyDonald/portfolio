import Nav from "./Nav";

function Hero() {
  return (
    <div className="text-green-700 bg">
      <Nav />
      <div className="flex flex-col justify-center items-start h-screen pl-64 pb-48">
        <span className="text-sm p-5 pl-0 text-white">Hi, my name is,</span>
        <p className="text-8xl font-black text-[#6EBD9E] ">
          Donald
          <span className="text-[#FFD700] y pl-0 font-sans"> Abuah.</span>{" "}
        </p>
        <p className="text-white text-3xl  pl-o ">
          FullStack Software Developer
        </p>
        <p className="text-[#d8f3dc] text-4xl pl-0 ">
          I create easy to use web experiences with appealing designs
        </p>
        <blockquote className="text-[#d8f3dc]">
          ...the universe stands aside for those who know where they are going
        </blockquote>
      </div>
    </div>
  );
}

export default Hero;
