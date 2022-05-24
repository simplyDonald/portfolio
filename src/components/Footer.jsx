import { motion } from "framer-motion";

const Footer = () => {

  const svgVariants = {
    hidden: {
      opacity: 0,
      rotate: -45
    },
    visible: {
      opacity: 1,
      rotate: 0                                       
    }
  }

  const compassVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
  return (
    <div className=" text-xs grid justify-items-center font-body">
      with
      <span className="hover:text-red-600">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
          variants={compassVariants}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </motion.svg>
      </span>
      from Toronto
      <img src="toronto.png" alt="toronto icon" className="w-8 invert pb-2" />
      <small>
        Designed and built by:{" "}
        <a href="https://donaldabuah.com/" className="italic">
          Donald Abuah
        </a>
      </small>
      <small>
        Photo by:{" "}
        <a
          href="https://unsplash.com/@theherregods_loppa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          rel="noreferrer"
          target={"_blank"}
          className="italic"
        >
          Natalie Herregods
        </a>{" "}
        on Unsplash
      </small>
      {/* <small>
        Inspiration:{" "}
        <cite>
          <a
            href="https://brittanychiang.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            Brittany Chiang
          </a>
        </cite>
      </small> */}
      {/* svg test */}
      {/* <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        className="w-16 p-2 invert rotate-12"
        style={{ enableBackground: "new 0 0 512 512" }}
        variants={svgVariants}
        initial="hidden"
        animate="visible"                             
        // xml:space="preserve"
      >
        <g>
          <g>
            <motion.path
              variants={compassVariants}
              d="M437.019,74.981C388.667,26.629,324.38,0,256,0S123.333,26.629,74.981,74.981C26.629,123.333,0,187.62,0,256
			c0,51.314,15.128,100.822,43.75,143.173c2.479,3.668,7.462,4.633,11.131,2.153c3.668-2.479,4.632-7.462,2.153-11.131
			C30.211,350.506,16.033,304.102,16.033,256C16.033,123.682,123.682,16.033,256,16.033S495.967,123.682,495.967,256
			S388.318,495.967,256,495.967c-68.338,0-133.637-29.274-179.155-80.316c-2.947-3.304-8.016-3.593-11.319-0.648
			c-3.304,2.947-3.595,8.015-0.648,11.318C113.435,480.772,183.096,512,256,512c68.38,0,132.667-26.629,181.019-74.981
			C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.981z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              
              d="M397.001,84.785c-3.417-2.817-8.469-2.33-11.285,1.086c-2.817,3.416-2.33,8.469,1.086,11.285
			c47.638,39.274,74.96,97.171,74.96,158.844c0,113.458-92.304,205.762-205.762,205.762S50.238,369.458,50.238,256
			S142.542,50.238,256,50.238c35.084,0,69.716,8.982,100.153,25.975c3.865,2.159,8.75,0.774,10.908-3.091
			c2.159-3.866,0.775-8.75-3.091-10.908C331.15,43.891,293.814,34.205,256,34.205C133.701,34.205,34.205,133.701,34.205,256
			S133.701,477.795,256,477.795S477.795,378.299,477.795,256C477.795,189.522,448.346,127.116,397.001,84.785z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              
              d="M334.226,177.773c-2.412-2.414-6.202-3.03-9.253-1.502l-96.746,48.373c-0.062,0.031-0.118,0.071-0.179,0.103
			c-0.146,0.078-0.289,0.161-0.429,0.248c-0.13,0.08-0.259,0.162-0.384,0.249c-0.131,0.092-0.259,0.188-0.385,0.288
			c-0.122,0.096-0.243,0.195-0.358,0.297c-0.118,0.105-0.23,0.214-0.341,0.325c-0.111,0.111-0.22,0.223-0.325,0.341
			c-0.103,0.117-0.201,0.236-0.297,0.358c-0.099,0.126-0.197,0.253-0.288,0.385c-0.087,0.125-0.169,0.253-0.249,0.384
			c-0.087,0.141-0.17,0.283-0.248,0.429c-0.032,0.061-0.072,0.117-0.103,0.179l-48.373,96.746c-1.45,2.9-0.978,6.476,1.172,8.902
			c2.38,2.685,6.37,3.462,9.584,1.854l96.746-48.373c0.062-0.03,0.118-0.071,0.179-0.103c0.146-0.078,0.289-0.161,0.429-0.248
			c0.13-0.08,0.259-0.162,0.384-0.249c0.131-0.092,0.259-0.188,0.385-0.288c0.122-0.096,0.243-0.195,0.358-0.297
			c0.118-0.105,0.23-0.214,0.341-0.325c0.111-0.111,0.22-0.223,0.325-0.341c0.103-0.117,0.201-0.236,0.297-0.358
			c0.099-0.126,0.197-0.253,0.288-0.385c0.087-0.125,0.169-0.253,0.249-0.384c0.087-0.141,0.17-0.283,0.248-0.429
			c0.032-0.061,0.072-0.117,0.103-0.178l48.373-96.746C337.254,183.974,336.639,180.187,334.226,177.773z M201.367,310.633
			l32.643-65.286l32.643,32.643L201.367,310.633z M277.99,266.653l-32.643-32.643l65.286-32.643L277.99,266.653z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              
              d="M273.102,59.858c-4.427,0-8.017,3.589-8.017,8.017v24.829l-19.518-29.276c-1.959-2.939-5.612-4.249-8.994-3.226
			c-3.38,1.024-5.693,4.14-5.693,7.673v51.307c0,4.369,3.648,8.017,8.017,8.017s8.017-3.648,8.017-8.017V94.352l19.518,29.276
			c2.059,3.089,6.098,4.369,9.562,3.03c3.054-1.18,5.124-4.203,5.124-7.477V67.875C281.119,63.447,277.53,59.858,273.102,59.858z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              variants={compassVariants}
              d="M102.079,273.637H84.443v-9.62h9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-9.086v-9.62h17.637
			c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H76.426c-4.427,0-8.017,3.589-8.017,8.017v51.307
			c0,4.427,3.589,8.017,8.017,8.017h25.653c4.427,0,8.017-3.589,8.017-8.017S106.507,273.637,102.079,273.637z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              
              d="M273.102,410.455h-17.637v-9.62h17.637c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-25.653
			c-4.427,0-8.017,3.589-8.017,8.017v25.653c0,4.427,3.589,8.017,8.017,8.017h17.637v9.62h-17.637c-4.427,0-8.017,3.589-8.017,8.017
			c0,4.427,3.589,8.017,8.017,8.017h25.653c4.427,0,8.017-3.589,8.017-8.017v-25.653
			C281.119,414.044,277.53,410.455,273.102,410.455z"
            />
          </g>
        </g>
        <g>
          <g>
            <motion.path
              variants={compassVariants}
              d="M436.892,222.439c-4.309-0.718-8.507,2.281-9.226,6.59l-4.498,26.99l-6.078-12.154c-2.896-5.793-11.445-5.794-14.34,0
			l-6.078,12.154l-4.498-26.99c-0.718-4.306-4.919-7.306-9.226-6.59c-4.309,0.717-7.308,4.917-6.59,9.226l8.551,51.307
			c0.571,3.426,3.282,6.094,6.716,6.61c3.432,0.518,6.81-1.237,8.362-4.343l9.932-19.863l9.932,19.863
			c1.609,3.218,5.278,4.991,8.799,4.263c3.206-0.662,5.741-3.302,6.279-6.53l8.551-51.307
			C444.2,227.356,441.201,223.157,436.892,222.439z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </motion.svg> */}
    </div>
  );
}
 
export default Footer;