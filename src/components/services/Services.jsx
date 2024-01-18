import {useRef} from "react";
import { motion,useInView } from "framer-motion";
import "./services.scss";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
 
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


  
  return (
    <motion.div className="services" variants={variants} 
    initial="initial"
    
    ref={ref}
    animate={isInView && "animate"}
    // whileInView="animate"
    
     >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="tile">
          <img src="/people.png" alt="" />
          <h1>
          <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="tile">
       
          <h1>
            <motion.b  whileHover={{color:"orange"}}>For Your</motion.b>Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A suscipit
            aut consequatur laborum ipsum molestiae perferendis maxime harum
            error, possimus ducimus tempora odio maiores quam, quod asperiores!
            Ad, praesentium magnam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A suscipit
            aut consequatur laborum ipsum molestiae perferendis maxime harum
            error, possimus ducimus tempora odio maiores quam, quod asperiores!
            Ad, praesentium magnam.
          </p>
          <button>Go</button>
        </motion.div> <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A suscipit
            aut consequatur laborum ipsum molestiae perferendis maxime harum
            error, possimus ducimus tempora odio maiores quam, quod asperiores!
            Ad, praesentium magnam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A suscipit
            aut consequatur laborum ipsum molestiae perferendis maxime harum
            error, possimus ducimus tempora odio maiores quam, quod asperiores!
            Ad, praesentium magnam.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;