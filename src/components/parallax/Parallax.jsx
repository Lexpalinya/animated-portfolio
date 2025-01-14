import {useRef} from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg,#131349,#0c0c1d)"
            : "linear-gradient(180deg,#131349,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "Services" ? "What we Do?" : "What we Did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg, backgroundImage: `url(${type === "Services"?"/planets.png":"/sun.png" })` }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
