import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

function About() {

  const {ref, controls, itemVariants} = useScroll();

  

  return (
    <motion.div
      id="about"
      className=" grid h-full mb-28 border-2 border-red-600 "
      variants={itemVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <blockquote className=" py-20 max-w-sm text-3xl justify-self-center font-body text-[#8892B0] text-center">
        "Whatever happens here trust your heart, It's as true as any compass"
        <p className=" text-base ">
          <cite className=" before:content-['-']">Dean Koontz</cite>
        </p>
      </blockquote>
      <h2 className=" h-max stroke text-3xl my-8 ml-8">About Me</h2>

      <div className="grid grid-cols-1 gap-14 mx-8 leading-5 lg:grid-cols-2 font-body">
        <div>
          <p className="mb-3">
            Hello! My name is Donald and I enjoy creating things that live on
            the internet. I have a passion for exploring, learning, and
            experiencing new things. I'm a firm believer in taking the path less
            travelled and freeing oneself from conformity because ideas roam
            freely when there are no inhibitions. My interest in web development
            started back in 2017 when my friends and I won a pitch competition
            sponsored by the world bank for a tech based solution in healthcare.
            Fast-forward to today, I've been fortunate to work on some cool and
            challenging projects. I also enjoy exploring insights from data
            analytics and blockchain technology. <br />
          </p>
          <p>
            Outside work i'm always down for some chess and a cup of tea. I
            might also try to convince you that we're all in a simulation.
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