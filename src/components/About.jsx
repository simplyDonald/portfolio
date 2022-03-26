function About() {
  return (
    <div id="about" className=" grid h-full ">
      <blockquote className=" py-20 max-w-sm text-3xl justify-self-center font-body text-[#8892B0]">
        "When you want something, all the universe conspires in helping you to
        achieve it."
        <p className=" text-base ">
          <cite className=" before:content-['-']">The Alchemist</cite> by Paulo
          Coelho
        </p>
      </blockquote>
      <h2 className="stroke text-3xl m-8">About Me</h2>

      <div className="grid grid-cols-2 gap-36 mx-8 leading-5 font-body">
        <div className="">
          <p className="mb-3">
            Hello! My name is Donald and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences .
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React. Here are a
            few technologies I’ve been working with recently: JavaScript (ES6+)
            TypeScript React Eleventy Node.js WordPress
          </p>
        </div>
        <div className=" self-center"> 
          <img
            className="fofo hover:filter-none transition ease-out delay-700 hover:cursor-pointer"
            src="gitpicnice.jpg"
            alt="donald_profile_pic"
            width="290"
            height="290"                                                  
          />
        </div>
      </div>
    </div>
  );
}

export default About;