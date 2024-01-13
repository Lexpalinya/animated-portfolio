import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./hero.scss";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChilderen: 0.1,
      },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition: {
            duration: 2,
            repeat:Infinity
        }
    }
  };
  const sliderVariants = {
    initial: {
      x: 0,
     
    },
    animate: {
      x: "-220%",
     
      transition: {
        repeat:Infinity,
        repeatType:"mirror",
        duration: 20,
     
      },
    },
    
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ALEX PALINYA</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Deverloper</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contack Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTexContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/alex.png " alt="" />
      </div>
    </div>
  );
};

export default Hero;