import Socials from "./Socials";
import { motion } from "framer-motion";
import useScroll from "hooks/useScroll";

const Contact = () => {
  const { ref, controls } = useScroll();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };


  return (
    <motion.section
      id="contact"
      className="text-center py-16 grid justify-items-center z-10"
      variants={itemVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <h3 className="text-[#FFD700]">What's next?</h3>
      <h2 className="text-xl md:text-3xl">Reach out and say Hi</h2>
      <p className="text-[#8892B0] max-w-xs text-center">
        Currently open to work opportunities. Want to say hi or collaborate? Go
        ahead I'm always happy to share ideas.
        <span className="justify-items-center grid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </p>
      <a
        className="border border-[#64FFDA]   hover:bg-[#0c5745] text-[#64FFDA] inline-block px-3 max-w-sm py-2 cursor-pointer mt-8 rounded tracking-wide transition ease-in duration-300"
        rel="noreferrer"
        href="mailto:donaldabuah@gmail.com?subject=Hi Donald"
        target="_blank"
      >
        Say Hi
      </a>
      {/* Social icons */}
      <div className="lg:hidden p-8">
        <Socials />
      </div>
    </motion.section>
  );
};

export default Contact;
