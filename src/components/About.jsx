import { motion } from "framer-motion";

function About() {


  

  return (
    <motion.section
      id="about"
      className=" grid h-full mb-28 "
      // variants={itemVariants}
      // ref={ref}
      // initial="hidden"
      // animate={controls}
    >
      <blockquote className=" py-20 max-w-sm text-xl justify-self-center font-body text-[#8892B0] text-center md:text-3xl">
        "Whatever happens here trust your heart, It's as true as any compass"
        <p className=" text-base ">
          <cite className=" before:content-['-']">Dean Koontz</cite>
        </p>
      </blockquote>
      <h2 className=" h-max stroke text-xl my-8 ml-8 md:text-3xl">About Me</h2>

      <div className="grid grid-cols-1 gap-14 mx-8 leading-5 lg:grid-cols-2 font-body">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3">
            Hello! My name is Donald and I enjoy creating things that live on
            the internet. I have a passion for exploring, learning, and
            experiencing new things. I'm a firm believer in taking the path less
            travelled and freeing oneself from conformity because ideas roam
            freely when there are no inhibitions. I've been fortunate to work on
            some cool and challenging projects. I also enjoy exploring insights
            from data analytics and blockchain technology. <br />
          </p>
          <p>
            Outside work i'm always down for some chess and a cup of tea. I
            might also try to convince you that we're all in a simulation.
          </p>
        </motion.div>
        <div className=" place-self-center">
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="fofo hover:filter-none transition ease-out delay-700 hover:cursor-pointer object-cover w-72 h-72"
            src="midjourney_pic.png"
            alt="donald_profile_pic"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;