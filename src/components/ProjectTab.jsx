import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";


const ProjectTab = ({name, link, color, logo, gridstamp}) => {
  return (
    <div
      className={`relative card ${name}-bg border-${color}-500 ${gridstamp} group`}
    >
      <img className=" w-16" src={logo} alt="" />
      <h3 className="font-bold mt-4">{name} clone</h3>
      {/* links */}
      <motion.div className="scale-0 group-hover:scale-100 absolute  bottom-0 right-0 p-2 flex">
        <a href={link.external} rel="noreferrer" className="" target="_blank">
          <ArrowTopRightOnSquareIcon className=" w-5 mb-2 " />
        </a>

        <a href={link.github} rel="noreferrer" className="" target="_blank">
          <img
            className="invert  w-5 "
            src="github-icon.png"
            alt="Github icons created by Pixel perfect - Flaticon"
          />
        </a>
      </motion.div>
    </div>
  );
}

export default ProjectTab