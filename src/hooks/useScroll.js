import  { useEffect } from 'react';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const useScroll = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    // Scroll Animation detection

    if (inView) {
      console.log(`I see ya!!!`);
      controls.start("visible");                                                  
    }
  }, [controls, inView]);

  const itemVariants = {
      hidden: {
        opacity: 0,
        // y: 50,
      },
      visible: {
        opacity: 1,
        // y: 0,
        transition: {
          type: "tween",
          duration: 1,
          delay: .3
        },
      },
    };

  return {
    ref, controls, itemVariants
  };
}

export default useScroll;