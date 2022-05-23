import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

function About() {

  const {ref, controls, itemVariants} = useScroll();

  

  return (
    <motion.div
      id="about"
      className=" grid h-full mb-48 "
      variants={itemVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <blockquote className=" py-20 max-w-sm text-3xl justify-self-center font-body text-[#8892B0]">
        "He had come a long way to this blue lawn, and his dream must have
        seemed so close that he could hardly fail to grasp it."
        <p className=" text-base ">
          <cite className=" before:content-['-']">The Great Gatsby</cite> by F.
          Scott Fitzgerald
        </p>
      </blockquote>
      <h2 className=" h-max stroke text-3xl my-8 ml-8">About Me</h2>

      <div className="grid grid-cols-1 gap-14 mx-8 leading-5 lg:grid-cols-2 font-body">
        <div>
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
        <div className=" place-self-center">
          <img
            className="fofo hover:filter-none transition ease-out delay-700 hover:cursor-pointer"
            src="gitpicnice.jpg"
            alt="donald_profile_pic"
            width="290"
            height="290"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;