import { motion } from "framer-motion";

function Hero() {

  const containerVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: "0.5",
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 1.5
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: .5
      }
      
    }
  };

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    <section className="text-green-700 bg">
      <div className="grid h-screen items-center justify-center lg:justify-start lg:pl-64 max-w-7xl">
        <motion.div
          className="grid "
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={itemVariants}
            className="text-[#FFD700] text-sm p-5 pl-2  md:justify-self-start"
          >
            Hi, my name is
          </motion.span>
          <motion.p
            className=" mx-auto text-7xl md:text-8xl font-black text-[#6EBD9E]  md:justify-self-start"
            variants={itemVariants}
          >
            Donald
            <span className="text-[#FFD700] y pl-0 font-sans">
              {" "}
              Abuah.
            </span>{" "}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-white text-xl md:text-3xl pl-2 font-body  md:justify-self-start"
          >
            <span className="italic">FullStack</span>{" "}
            <span className="font-semibold"> Software Developer</span>
          </motion.p>
          <motion.p
            className="text-[#d8f3dc] text-base pl-2 leading-6 max-w-lg mt-3 font-body justify-self-center md:justify-self-start"
            variants={itemVariants}
          >
            I’m a software developer specializing in creating easy-to-use web
            experiences with engaging and appealing design.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
